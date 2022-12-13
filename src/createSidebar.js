import createButton from "./createButton";
import todayButtonFunctionality from "./todayButtonFunc.js";
import scheduledButtonFunctionality from "./scheduledButtonFunc";
import completedButtonFunctionality from "./completedButtonFunc";

function createSidebar1() {
  const sidebarContainer = document.createElement("div");
  sidebarContainer.classList.add("sideBarContainer");

  sidebarContainer
    .appendChild(createButton("Today", "Reminders"))
    .addEventListener("click", () => {
      todayButtonFunctionality();
    });
  sidebarContainer
    .appendChild(createButton("Scheduled", "Today"))
    .addEventListener("click", () => {
      scheduledButtonFunctionality();
    });
  sidebarContainer
    .appendChild(createButton("Completed", "Completed"))
    .addEventListener("click", () => {
      completedButtonFunctionality();
    });
  return sidebarContainer;
}

export default createSidebar1;
