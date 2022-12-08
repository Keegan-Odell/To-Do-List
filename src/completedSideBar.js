import createButton from "./createButton";
import createDiv from "./createDiv";
import createSidebar1 from "./createSidebar";
import createSidebar2 from "./createSidebar2";

function completedSidebar() {
  const sidebarContainer = document.createElement("div");
  sidebarContainer.classList.add("sideBarContainerComplete");

  sidebarContainer.appendChild(createSidebar1());
  sidebarContainer.appendChild(createSidebar2());
  return sidebarContainer;
}

export default completedSidebar;
