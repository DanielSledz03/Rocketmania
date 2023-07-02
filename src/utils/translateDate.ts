export const translateDate = (dt: Date) => {
  const date = new Date(dt);
  const elements = {
    day: date.getDate(),
    month: date.getMonth() + 1 < 10 ? '0' + date.getMonth() : date.getMonth(),
    year: date.getFullYear(),
    hour: date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
    minutes: date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
  };

  const full =
    elements.day +
    '.' +
    elements.month +
    '.' +
    elements.year +
    ', ' +
    elements.hour +
    ':' +
    elements.minutes;

  return { ...elements, full };
};
