import { screen, userEvent } from "@storybook/testing-library";
import demoData from "@openeuropa/bcl-data-form/data.js";
import form from "@openeuropa/bcl-form/form.html.twig";

export default {
  title: "Components/Forms/Form",
  parameters: {
    controls: { disable: true },
  },
};

const clientValidation = (story) => {
  const demo = story();
  return `<script>
  var form = document.querySelector('.needs-validation');
  form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    }

    form.classList.add('was-validated')
  }, false)
  </script>${demo}`;
};

export const FilledForm = () => form(demoData);

FilledForm.storyName = "Filled form (with validation)";
FilledForm.decorators = [clientValidation];

FilledForm.play = async () => {
  const emailInput = screen.getByLabelText("Email address *", {
    selector: "input",
  });

  await userEvent.type(emailInput, "example-email", {
    delay: 100,
  });

  const passwordInput = screen.getByLabelText("Password *", {
    selector: "input",
  });

  await userEvent.type(passwordInput, "ExamplePassword", {
    delay: 100,
  });

  const checkboxInput = screen.getByLabelText("Check me out *", {
    selector: "input",
  });

  await userEvent.click(checkboxInput);

  const submitButton = screen.getByRole("button");

  await userEvent.click(submitButton);
};
