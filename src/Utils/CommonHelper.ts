export const exportToMonthFormat = (date: Date = new Date(), isShort: boolean = false) => {
  const currentDate = getCurrentDate();
  if(date.getDate() === currentDate.getDate() && date.getMonth() === currentDate.getMonth() && date.getFullYear() === currentDate.getFullYear()) {
    return 'Present';
  }
  return getMonth(date, isShort) + "-" + date.getFullYear();
};
export const getMonth = (date: Date = new Date(), isShort: boolean) =>
  [
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
  ][date.getMonth()].substr(0, isShort ? 3 : undefined);
export const getCurrentDate = ():Date => new Date();
