import "./styles/main.scss";
import createButton from "./createButton";
import createDiv from "./createDiv";
import completedSidebar from "./completedSideBar";

export const todos = [];

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

  main.appendChild(completedSidebar());
  main.appendChild(createDiv("mainContainer", ""));
  return main;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  footer.setAttribute("id", "footer");

  footer.appendChild(
    createDiv(
      "footerInfo",
      `Copyright © ${new Date().getFullYear()} Keegan Odell`
    )
  );
  return footer;
}

function initializeWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());
}

export default initializeWebsite;
