import createButton from "./createButton";
import todayButtonFunctionality from "./todayButtonFunc.js";
import scheduledButtonFunctionality from "./scheduledButtonFunc";
import completedButtonFunctionality from "./completedButtonFunc";

function createSidebar1() {
  const sidebarContainer = document.createElement("div");
  sidebarContainer.classList.add("sideBarContainer");

  sidebarContainer
    .appendChild(createButton("Today", "Today"))
    .addEventListener("click", () => {
      todayButtonFunctionality();
    });
  sidebarContainer
    .appendChild(createButton("Scheduled", "Scheduled"))
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
