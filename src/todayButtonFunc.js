import createDiv from "./createDiv";
import createButton from "./createButton";

function todayButtonFunctionality() {
  const mainContainer = document.getElementById("mainContainer");

  mainContainer.textContent = "";
  mainContainer.appendChild(createDiv("Title", "Title 1"));
  mainContainer
    .appendChild(createButton("addReminder", "Add Reminder"))
    .addEventListener("click", () => {
      console.log(123);
    });
  return mainContainer;
}

export default todayButtonFunctionality;
