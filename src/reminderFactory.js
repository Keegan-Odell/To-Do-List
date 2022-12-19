import { format } from "date-fns";

export function reminderFactory(reminder, duedate) {
  const object = {
    reminder: reminder,
    duedate: duedate,
  };
  return object;
}
