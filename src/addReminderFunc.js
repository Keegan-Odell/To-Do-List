import createTable from "./createTable";
import createForm from "./createForm";
import createReminderRows from "./createReminderRows";

function addReminder() {
  const reminderContainer = document.getElementById("reminderContainer");

  reminderContainer.textContent = "";
  reminderContainer.appendChild(createTable("reminderTable", "reminderTable"));
  createReminderRows(JSON.parse(localStorage.getItem("reminderArray")));
  reminderContainer.appendChild(createForm("reminderForm"));

  return reminderContainer;
}

export default addReminder;
