/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDays {
  Mon = "Понеділок",
  Tue = "Вівторок",
  Wed = "Середа",
  Thu = "Четвер",
  Fri = "П'ятниця",
  Sat = "Субота",
  Sun = "Неділя",
}

function isWeekend(day: WeekDays): boolean {
  return day === WeekDays.Sat || day === WeekDays.Sun;
}
