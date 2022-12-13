import createReminder from "./createReminderFunc";
import createCancel from "./createCancelFunc";

function createForm(identificaiton, className) {
  const form = document.createElement("form");
  form.classList.add(className);
  form.setAttribute("id", identificaiton);

  const reminderName = document.createElement("input");
  reminderName.setAttribute("type", "text");
  reminderName.setAttribute("name", "reminderName");
  reminderName.setAttribute("id", "reminderName");

  const createButton = document.createElement("input");
  createButton.setAttribute("type", "button");
  createButton.setAttribute("value", "Create");

  const cancelButton = document.createElement("input");
  cancelButton.setAttribute("type", "button");
  cancelButton.setAttribute("value", "Cancel");

  form.appendChild(reminderName);
  form.appendChild(createButton).addEventListener("click", () => {
    createReminder();
  });
  form.appendChild(cancelButton).addEventListener("click", () => {
    createCancel();
  });

  return form;
}

export default createForm;
