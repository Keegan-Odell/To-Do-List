function createReminderRows(data) {
  const reminderTable = document.getElementById("reminderTable");
  reminderTable.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    let row = `
      <tr>
        <td><button id=${i} class="completionButton" onclick="deleteReminderRow(this)"></button></td>
        <td>${data[i].reminder}</td>
        <td><button id=${i + 100} onclick="createDate(this)">${
      data[i].duedate
    }</button></td>
      </tr>
    `;
    reminderTable.innerHTML += row;
  }
}

export default createReminderRows;
