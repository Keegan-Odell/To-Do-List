function createReminderRows(data) {
  const reminderTable = document.getElementById("reminderTable");
  reminderTable.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    let row = `
      <tr>
        <td><button id=${i} class="completionButton" onclick="deleteReminderRow(this)"></button></td>
        <td class="dataRow">${data[i].reminder}</td>
        <td class="dateRow"><button id=${
          i + 100
        } class="dateBtn" onclick="createDate(this)">${
      data[i].duedate
    }</button></td>
      </tr>
    `;
    reminderTable.innerHTML += row;
  }
}

export default createReminderRows;
