import Offcanvas from "@openeuropa/bcl-bootstrap/js/src/offcanvas";
import AccessibleToggle from "./accessible-toggle";

const toggles = [{ selector: '[data-bs-toggle="offcanvas"]', type: "offcanvas" }];

const wait = () => new Promise((resolve) => setTimeout(resolve, 50));

const setup = (role) => {
  document.body.innerHTML = `
    <button data-bs-toggle="offcanvas" data-bs-target="#test-offcanvas"></button>
    <div class="offcanvas-lg" id="test-offcanvas" tabindex="-1" aria-labelledby="test-title" ${role ? `role="${role}"` : ""}>
      <h2 id="test-title">Filters</h2>
    </div>
  `;

  return document.getElementById("test-offcanvas");
};

const showAndHide = async (offcanvas) => {
  const instance = Offcanvas.getOrCreateInstance(offcanvas);
  instance.show();
  await wait();
  expect(offcanvas.getAttribute("role")).toBe("dialog");
  instance.hide();
  await wait();
};

describe("AccessibleToggle - offcanvas role", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  test("restores the role from the markup after hide", async () => {
    const offcanvas = setup("region");
    AccessibleToggle.init(toggles);

    await showAndHide(offcanvas);

    expect(offcanvas.getAttribute("role")).toBe("region");
    expect(offcanvas.hasAttribute("aria-modal")).toBe(false);
  });

  test("keeps the first role when init runs again while open", async () => {
    const offcanvas = setup("region");
    AccessibleToggle.init(toggles);

    const instance = Offcanvas.getOrCreateInstance(offcanvas);
    instance.show();
    await wait();
    AccessibleToggle.init(toggles);
    instance.hide();
    await wait();

    expect(offcanvas.getAttribute("role")).toBe("region");
  });

  test("adds no role when the markup has none", async () => {
    const offcanvas = setup();
    AccessibleToggle.init(toggles);

    await showAndHide(offcanvas);

    expect(offcanvas.hasAttribute("role")).toBe(false);
  });
});
