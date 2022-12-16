import createDiv from "./createDiv";
import createButton from "./createButton";
import addReminder from "./addReminderFunc";
import createReminderRows from "./createReminderRows";
import createTable from "./createTable";

function todayButtonFunctionality() {
  const mainContainer = document.getElementById("mainContainer");

  const reminderContainer = document.createElement("div");
  reminderContainer.classList.add("reminderContainer");
  reminderContainer.setAttribute("id", "reminderContainer");

  reminderContainer.appendChild(createTable("reminderTable", "reminderTable"));
  mainContainer.textContent = "";
  mainContainer.appendChild(createDiv("Title", "Reminders"));
  mainContainer.appendChild(reminderContainer);
  mainContainer
    .appendChild(createButton("addReminder", "+ Add New Reminder"))
    .addEventListener("click", () => {
      addReminder();
    });
  createReminderRows(JSON.parse(localStorage.getItem("reminderArray")));
  return mainContainer;
}

export default todayButtonFunctionality;
