import "./styles/main.scss";
import createButton from "./createButton";
import createDiv from "./createDiv";

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");
  header.setAttribute("id", "header");

  header.appendChild(createDiv("headerText", "Reminders"));
  return header;
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");

  main.appendChild(createButton("Today", "Today"));
  main.appendChild(createButton("Scheduled", "Scheduled"));
  main.appendChild(createButton("Completed", "Completed"));
  main.appendChild(createDiv("projects", "Projects"));
  main.appendChild(createButton("addProjects", "+Projects"));
  return main;
}

function initializeWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createMain());
}

export default initializeWebsite;
