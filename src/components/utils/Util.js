const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/* getMonthName - Gets the name of a month number
@index - index for value retrieving in months
return - Name of the month
*/
export function getMonthName(index) {
  return months[index];
}

export const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

/* getWeeksForMonth - Gets amounts of weeks of a month
@month - A month number
@year - A year number
return - Array of weeks (array of days)
*/
export function getWeeksForMonth(month, year) {
  const firstOfMonth = new Date(year, month, 1);
  const firstDayOfWeek = firstOfMonth.getDay();
  const weeks = [[]];

  let currWeek = weeks[0];
  let currDate = firstOfMonth;

  // Null days until first day
  for (let i = 0; i < firstDayOfWeek; i++) {
    currWeek.push(null);
  }

  while (currDate.getMonth() === month) {
    if (currWeek.length === 7) {
      currWeek = [];
      weeks.push(currWeek);
    }

    currWeek.push(currDate);
    currDate = new Date(year, month, currDate.getDate() + 1);
  }

  while (currWeek.length < 7) {
    currWeek.push(null);
  }

  return weeks;
}