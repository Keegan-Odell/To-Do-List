import createDiv from "./createDiv";

function scheduledButtonFunctionality() {
  const mainContainer = document.getElementById("mainContainer");

  mainContainer.textContent = "";
  mainContainer.appendChild(createDiv("Title", "Title 2"));
  return mainContainer;
}

export default scheduledButtonFunctionality;
