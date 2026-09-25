import SlimSelect from "slim-select";

describe("Slim Select accessibility patch", () => {
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

    expect(search.getAttribute("aria-activedescendant")).toBe(
      main.getAttribute("aria-activedescendant"),
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
});
