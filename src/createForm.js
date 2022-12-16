import createReminder from "./createReminderFunc";
import createCancel from "./createCancelFunc";
import createDiv from "./createDiv";

function createForm(identificaiton, className) {
  const form = document.createElement("form");
  form.classList.add(className);
  form.setAttribute("id", identificaiton);

  const buttonContainer = createDiv("buttonContainer", "");

  const reminderName = document.createElement("input");
  reminderName.setAttribute("type", "text");
  reminderName.setAttribute("name", "reminderName");
  reminderName.setAttribute("id", "reminderName");
  reminderName.setAttribute("placeholder", "Put Reminder Here");

  const createButton = document.createElement("input");
  createButton.setAttribute("type", "button");
  createButton.setAttribute("id", "createButton");
  createButton.setAttribute("value", "Create");

  const cancelButton = document.createElement("input");
  cancelButton.setAttribute("type", "button");
  cancelButton.setAttribute("id", "cancelButton");
  cancelButton.setAttribute("value", "Cancel");

  form.appendChild(reminderName);
  form.appendChild(buttonContainer);
  buttonContainer.appendChild(createButton).addEventListener("click", () => {
    createReminder();
    location.reload();
  });
  buttonContainer.appendChild(cancelButton).addEventListener("click", () => {
    createCancel();
  });

  return form;
}

export default createForm;
