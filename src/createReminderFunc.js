import { reminderArray } from "./globalData";
import { reminderFactory } from "./reminderFactory";

function createReminderRows(data) {
  const reminderTable = document.getElementById("reminderTable");
  reminderTable.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    let row = `
      <tr>
        <td>${data[i].reminder}</td>
      </tr>
    `;
    reminderTable.innerHTML += row;
  }
}

function createReminder() {
  const reminderText = document.getElementById("reminderName").value;
  const reminderEl = reminderFactory(reminderText, "");
  reminderArray.push(reminderEl);
  createReminderRows(reminderArray);
}

export default createReminder;
