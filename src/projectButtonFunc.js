import createDiv from "./createDiv";
import createButton from "./createButton";
import addProject from "./addProjectsFunc";

function projectButtonFunctionality() {
  const mainContainer = document.getElementById("mainContainer");

  mainContainer.textContent = "";
  mainContainer.appendChild(createDiv("Title", "Title 4"));
  mainContainer
    .appendChild(createButton("addProject", "Add Project"))
    .addEventListener("click", () => {
      addProject();
    });
  return mainContainer;
}

export default projectButtonFunctionality;
