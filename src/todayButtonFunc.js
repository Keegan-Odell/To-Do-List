import createDiv from "./createDiv";
import createButton from "./createButton";
import addReminder from "./addReminderFunc";

function todayButtonFunctionality() {
  const mainContainer = document.getElementById("mainContainer");

  const reminderContainer = document.createElement("div");
  reminderContainer.classList.add("reminderContainer");
  reminderContainer.setAttribute("id", "reminderContainer");

  mainContainer.textContent = "";
  mainContainer.appendChild(createDiv("Title", "Reminders"));
  mainContainer.appendChild(reminderContainer);
  mainContainer
    .appendChild(createButton("addReminder", "Add Reminder"))
    .addEventListener("click", () => {
      addReminder();
    });
  return mainContainer;
}

export default todayButtonFunctionality;
