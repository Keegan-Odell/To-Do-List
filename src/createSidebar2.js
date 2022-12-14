import createButton from "./createButton";
import projectButtonFunctionality from "./projectButtonFunc";

function createSidebar2() {
  const sidebarContainer = document.createElement("div");
  sidebarContainer.classList.add("sideBarContainer2");

  sidebarContainer
    .appendChild(createButton("addProjects", "Projects"))
    .addEventListener("click", () => {
      projectButtonFunctionality();
    });

  return sidebarContainer;
}

export default createSidebar2;
