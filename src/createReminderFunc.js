import { reminderFactory } from "./reminderFactory";
import createReminderRows from "./createReminderRows";
import save from "./globalData";
import { format } from "date-fns";

function createReminder() {
  const reminderText = document.getElementById("reminderName").value;
  const reminderEl = reminderFactory(
    reminderText,
    format(new Date(), "dd/MM/yyyy")
  );
  save(reminderEl);
  createReminderRows(JSON.parse(localStorage.getItem("reminderArray")));
}

export default createReminder;
