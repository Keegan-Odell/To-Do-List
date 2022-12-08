function createButton(className, btnName) {
  const btn = document.createElement("button");
  btn.classList.add(className);
  btn.textContent = btnName;

  return btn;
}

export default createButton;
