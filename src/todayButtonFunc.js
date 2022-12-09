import createDiv from "./createDiv";
import createButton from "./createButton";
import addReminder from "./addReminderFunc";

function todayButtonFunctionality() {
  const mainContainer = document.getElementById("mainContainer");

  mainContainer.textContent = "";
  mainContainer.appendChild(createDiv("Title", "Title 1"));
  mainContainer
    .appendChild(createButton("addReminder", "Add Reminder"))
    .addEventListener("click", () => {
      addReminder();
    });
  return mainContainer;
}

export default todayButtonFunctionality;
