import createDiv from "./createDiv";

function completedButtonFunctionality() {
  const mainContainer = document.getElementById("mainContainer");

  mainContainer.textContent = "";
  mainContainer.appendChild(createDiv("Title", "Title 3"));
  return mainContainer;
}

export default completedButtonFunctionality;
