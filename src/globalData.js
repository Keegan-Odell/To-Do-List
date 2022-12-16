import { reminderFactory } from "./reminderFactory";

if (localStorage.getItem("reminderArray") == null) {
  const placeholder = reminderFactory("placeholder", "placeholder");
  localStorage.setItem("reminderArray", "[]");
}

export default function save(reminderelement) {
  let oldData = JSON.parse(localStorage.getItem("reminderArray"));
  oldData.push(reminderelement);

  localStorage.setItem("reminderArray", JSON.stringify(oldData));
}
