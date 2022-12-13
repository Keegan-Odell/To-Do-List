function createTableRows(identification, className) {
  const tableRow = document.createElement("tr");
  tableRow.classList.add(className);
  tableRow.setAttribute("id", identification);

  return tableRow;
}

export default createTableRows;
