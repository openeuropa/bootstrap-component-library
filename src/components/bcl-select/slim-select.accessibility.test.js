import SlimSelect from "slim-select";
import { renderTwigFileAsHtml } from "@openeuropa/bcl-test-utils";
import { DrupalAttribute } from "drupal-attribute";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

describe("Slim Select accessibility", () => {
  let slimSelect;

  afterEach(() => {
    slimSelect?.destroy();
    document.body.innerHTML = "";
  });

  test("associates the focused combobox and listbox with the field label", () => {
    document.body.innerHTML = `
      <label for="location">Location</label>
      <select id="location" multiple>
        <option value="be">Belgium</option>
        <option value="cz">Czechia</option>
      </select>
    `;

    slimSelect = new SlimSelect({
      select: "#location",
      settings: { contentPosition: "relative" },
    });

    const main = document.querySelector(".ss-main");
    const search = document.querySelector(".ss-search input");
    const listbox = document.querySelector(".ss-list");
    const label = document.querySelector('label[for="location"]');
    const status = document.querySelector(".ss-status");

    expect(label.id).not.toBe("");
    expect(main.getAttribute("aria-labelledby")).toBe(label.id);
    expect(search.getAttribute("aria-labelledby")).toBe(label.id);
    expect(listbox.getAttribute("aria-labelledby")).toBe(label.id);
    expect(search.getAttribute("role")).toBe("combobox");
    expect(search.getAttribute("aria-controls")).toBe(listbox.id);
    expect(search.getAttribute("aria-expanded")).toBe("false");
    expect(status.getAttribute("role")).toBe("status");
    expect(status.getAttribute("aria-live")).toBe("polite");

    slimSelect.open();
    expect(search.getAttribute("aria-expanded")).toBe("true");

    search.dispatchEvent(
      new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true }),
    );

    expect(main.getAttribute("role")).toBe("combobox");
    expect(main.tabIndex).toBe(0);
    expect(search.tabIndex).toBe(-1);
    expect(main.getAttribute("aria-activedescendant")).toBe(
      search.getAttribute("aria-activedescendant"),
    );
    const activeOption = document.getElementById(
      search.getAttribute("aria-activedescendant"),
    );
    expect(activeOption.getAttribute("role")).toBe("option");

    slimSelect.close();
    expect(search.getAttribute("aria-expanded")).toBe("false");
    expect(search.getAttribute("aria-activedescendant")).toBeNull();
  });

  test("removes a selected value with the Space key", () => {
    document.body.innerHTML = `
      <label for="country">Country</label>
      <select id="country" multiple>
        <option value="it" selected>Italy</option>
        <option value="fr" selected>France</option>
      </select>
    `;

    slimSelect = new SlimSelect({
      select: "#country",
      settings: { closeOnSelect: false, contentPosition: "relative" },
    });

    const remove = document.querySelector(
      '.ss-value-delete[aria-label="Remove Italy"]',
    );
    const event = new KeyboardEvent("keydown", {
      key: " ",
      bubbles: true,
      cancelable: true,
    });

    remove.dispatchEvent(event);

    expect(event.defaultPrevented).toBe(true);
    expect(slimSelect.getSelected()).toEqual(["fr"]);
  });

  const createGroupedSelect = (settings = {}, events = {}) => {
    document.body.innerHTML = `
      <label for="grouped">Destinations</label>
      <select id="grouped" multiple>
        <optgroup label="Group 1" data-selectall="true">
          <option value="be">Belgium</option>
          <option value="cz">Czechia</option>
          <option value="fr" disabled>France</option>
        </optgroup>
        <option value="it" selected>Italy</option>
      </select>`;
    slimSelect = new SlimSelect({
      select: "#grouped",
      settings: {
        contentPosition: "relative",
        closeOnSelect: false,
        ...settings,
      },
      events,
    });
    slimSelect.open();
  };

  test("Enter reopens without selecting the previously highlighted option", () => {
    createGroupedSelect();
    const search = document.querySelector(".ss-search input");
    search.dispatchEvent(
      new KeyboardEvent("keydown", { key: "ArrowUp", bubbles: true }),
    );
    slimSelect.close();
    const main = document.querySelector(".ss-main");
    main.focus();
    main.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Enter", bubbles: true }),
    );
    expect(search.getAttribute("aria-expanded")).toBe("true");
    expect(slimSelect.getSelected()).toEqual(["it"]);
    expect(search.getAttribute("aria-activedescendant")).toBeNull();
  });

  test("search stays inside the dropdown and receives focus after opening", () => {
    createGroupedSelect();
    slimSelect.close();
    const search = document.querySelector(".ss-search input");
    expect(search.closest(".ss-content")).not.toBeNull();
    expect(search.closest(".ss-main")).toBeNull();
    expect(search.hasAttribute("aria-hidden")).toBe(true);
    const main = document.querySelector(".ss-main");
    main.focus();
    main.dispatchEvent(
      new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true }),
    );
    expect(document.activeElement).toBe(search);
    expect(search.getAttribute("aria-expanded")).toBe("true");
    expect(
      document.getElementById(search.getAttribute("aria-activedescendant"))
        .textContent,
    ).toBe("Belgium");
    const tab = new KeyboardEvent("keydown", {
      key: "Tab",
      bubbles: true,
      cancelable: true,
    });
    search.dispatchEvent(tab);
    expect(tab.defaultPrevented).toBe(false);
    expect(search.getAttribute("aria-expanded")).toBe("false");
  });

  test("Space types without selecting; Enter selects only the active option", () => {
    createGroupedSelect();
    const search = document.querySelector(".ss-search input");
    search.dispatchEvent(
      new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true }),
    );
    const space = new KeyboardEvent("keydown", {
      key: " ",
      bubbles: true,
      cancelable: true,
    });
    search.dispatchEvent(space);
    expect(space.defaultPrevented).toBe(false);
    expect(slimSelect.getSelected()).toEqual(["it"]);
    search.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Enter", bubbles: true }),
    );
    expect(slimSelect.getSelected().sort()).toEqual(["be", "it"]);
    expect(document.activeElement).toBe(search);
  });

  test("Escape closes the popup and returns focus to the trigger", () => {
    createGroupedSelect();
    const search = document.querySelector(".ss-search input");
    search.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
    );
    expect(search.getAttribute("aria-expanded")).toBe("false");
    expect(document.activeElement).toBe(document.querySelector(".ss-main"));
    expect(search.hasAttribute("aria-hidden")).toBe(true);
  });

  test("typing filters the popup without changing search focus", () => {
    jest.useFakeTimers();
    try {
      createGroupedSelect();
      const search = document.querySelector(".ss-search input");
      search.focus();
      search.value = "Belg";
      search.dispatchEvent(new Event("input", { bubbles: true }));
      jest.advanceTimersByTime(150);
      expect(search.getAttribute("aria-expanded")).toBe("true");
      expect(document.activeElement).toBe(search);
      expect(
        [...document.querySelectorAll('.ss-list [role="option"]')].map(
          (option) => option.textContent,
        ),
      ).toEqual(["Belgium"]);
    } finally {
      jest.useRealTimers();
    }
  });

  test("Tab leaves the input; Shift Tab can return and Enter reopens", () => {
    document.body.innerHTML =
      '<label for="plain">Destination</label><select id="plain" multiple><option value="be">Belgium</option></select><button id="next">Next</button>';
    slimSelect = new SlimSelect({
      select: "#plain",
      settings: { contentPosition: "relative" },
    });
    const search = document.querySelector(".ss-search input");
    const main = document.querySelector(".ss-main");
    main.focus();
    main.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Enter", bubbles: true }),
    );
    const tab = new KeyboardEvent("keydown", {
      key: "Tab",
      bubbles: true,
      cancelable: true,
    });
    search.dispatchEvent(tab);
    expect(tab.defaultPrevented).toBe(false);
    expect(search.getAttribute("aria-expanded")).toBe("false");
    document.querySelector("#next").focus();
    main.focus();
    main.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Enter", bubbles: true }),
    );
    expect(search.getAttribute("aria-expanded")).toBe("true");
    expect(slimSelect.getSelected()).toEqual([]);
  });

  test("exposes the named group as the parent of its options", async () => {
    createGroupedSelect();
    const group = document.querySelector('.ss-list [role="group"]');
    expect(
      document.getElementById(group.getAttribute("aria-labelledby"))
        .textContent,
    ).toBe("Group 1");
    expect(
      [...group.querySelectorAll('[role="option"]')].map(
        (option) => option.textContent,
      ),
    ).toEqual(["Belgium", "Czechia", "France"]);
    expect(
      document.querySelector(
        ".ss-selectall, .ss-selectall-slot, .ss-group-actions",
      ),
    ).toBeNull();
    expect(
      await axe(document.body, { rules: { region: { enabled: false } } }),
    ).toHaveNoViolations();
  });

  test("enabling and disabling updates individual remove buttons", () => {
    createGroupedSelect({ disabled: true });
    const buttons = () => [...document.querySelectorAll(".ss-value-delete")];
    expect(buttons()).toHaveLength(1);
    expect(buttons().every((button) => button.disabled)).toBe(true);

    slimSelect.enable();
    expect(buttons().every((button) => !button.disabled)).toBe(true);

    slimSelect.disable();
    expect(buttons().every((button) => button.disabled)).toBe(true);
    buttons().forEach((button) => button.click());
    expect(slimSelect.getSelected()).toEqual(["it"]);

    slimSelect.enable();
    document
      .querySelector('.ss-value-delete[aria-label="Remove Italy"]')
      .click();
    expect(slimSelect.getSelected()).toEqual([]);
  });

  test("remove controls have native button semantics and a focusable element", () => {
    createGroupedSelect();
    const remove = document.querySelector(
      '.ss-value-delete[aria-label="Remove Italy"]',
    );
    expect(remove.tagName).toBe("BUTTON");
    expect(remove.type).toBe("button");
    remove.focus();
    expect(document.activeElement).toBe(remove);
  });

  test("carries helper text and existing descriptions from Twig to both comboboxes", async () => {
    const attributes = new DrupalAttribute().setAttribute(
      "aria-describedby",
      "existing",
    );
    document.body.innerHTML =
      '<p id="existing">Existing description</p>' +
      (await renderTwigFileAsHtml(
        "@oe-bcl/bcl-select/select.html.twig",
        {
          id: "helped",
          label: "Destinations",
          multiple: true,
          helper_text: "Choose one or more destinations",
          helper_text_id: "helperText",
          attributes,
          options: [{ value: "be", label: "Belgium" }],
        },
        false,
      ));
    slimSelect = new SlimSelect({
      select: "#helped",
      settings: { contentPosition: "relative" },
    });
    expect(
      document.querySelector("#helped").getAttribute("aria-describedby"),
    ).toBe("existing helperText");
    for (const element of document.querySelectorAll('[role="combobox"]')) {
      expect(element.getAttribute("aria-describedby")).toBe(
        "existing helperText",
      );
    }
  });
});
