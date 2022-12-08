import createButton from "./createButton";
import createDiv from "./createDiv";

function createSidebar2() {
  const sidebarContainer = document.createElement("div");
  sidebarContainer.classList.add("sideBarContainer2");

  sidebarContainer.appendChild(createButton("addProjects", "Projects"));

  return sidebarContainer;
}

export default createSidebar2;
