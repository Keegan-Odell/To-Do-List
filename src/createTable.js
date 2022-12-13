function createTable(identification, className) {
  const table = document.createElement("table");
  table.classList.add(className);
  table.setAttribute("id", identification);

  return table;
}

export default createTable;
