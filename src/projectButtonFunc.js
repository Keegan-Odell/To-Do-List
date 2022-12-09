import createDiv from "./createDiv";
import createButton from "./createButton";

function projectButtonFunctionality() {
  const mainContainer = document.getElementById("mainContainer");

  mainContainer.textContent = "";
  mainContainer.appendChild(createDiv("Title", "Title 4"));
  mainContainer
    .appendChild(createButton("addProject", "Add Project"))
    .addEventListener("click", () => {
      console.log(123);
    });
  return mainContainer;
}

export default projectButtonFunctionality;
