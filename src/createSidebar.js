import createButton from "./createButton";
import createDiv from "./createDiv";

function createSidebar1() {
  const sidebarContainer = document.createElement("div");
  sidebarContainer.classList.add("sideBarContainer");

  sidebarContainer.appendChild(createButton("Today", "Today"));
  sidebarContainer.appendChild(createButton("Scheduled", "Scheduled"));
  sidebarContainer.appendChild(createButton("Completed", "Completed"));
  return sidebarContainer;
}

export default createSidebar1;
