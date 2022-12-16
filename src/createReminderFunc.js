import { reminderFactory } from "./reminderFactory";
import createReminderRows from "./createReminderRows";
import save from "./globalData";

function createReminder() {
  const reminderText = document.getElementById("reminderName").value;
  const reminderEl = reminderFactory(reminderText, "");
  save(reminderEl);
  createReminderRows(JSON.parse(localStorage.getItem("reminderArray")));
}

export default createReminder;
