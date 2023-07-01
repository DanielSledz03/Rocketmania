export function getDate(LaunchDate: Date, status: string) {
  const date = new Date(LaunchDate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const timezoneOffset = new Date(date).getTimezoneOffset() / 60;
  switch (status) {
    case 'Postponed':
      return {
        text: 'Oczekuje na nową datę',
      };

    default:
      return {
        text:
          (day < 10 ? '0' + day : day) +
          '.' +
          (month < 10 ? '0' + month : month) +
          '.' +
          year +
          ', ' +
          (hours < 10 ? '0' + hours : hours) +
          ':' +
          (minutes < 10 ? '0' + minutes : minutes) +
          ' UTC' +
          (timezoneOffset * -1 !== 0
            ? (timezoneOffset < 0 ? '+' : '-') + timezoneOffset * -1
            : ''),
        color: 'rgba(255, 0, 0, 1)',
      };
  }
}
