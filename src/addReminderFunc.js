import createTable from "./createTable";
import createForm from "./createForm";

function addReminder() {
  const reminderContainer = document.getElementById("reminderContainer");

  reminderContainer.textContent = "";
  reminderContainer.appendChild(createTable("reminderTable", "reminderTable"));
  reminderContainer.appendChild(createForm("reminderForm", "reminderForm"));

  return reminderContainer;
}

export default addReminder;
