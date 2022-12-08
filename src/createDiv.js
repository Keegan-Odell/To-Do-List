function createDiv(className, text) {
  const div = document.createElement("div");
  div.classList.add(className);
  div.textContent = text;

  return div;
}

export default createDiv;
