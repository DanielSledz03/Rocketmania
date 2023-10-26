interface TimeDifference {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  miliseconds: number;
}

interface FormattedLaunchDateReturn {
  text: string;
  color?: string;
}

const addLeadingZero = (number: number): string => (number < 10 ? '0' + number : number.toString());

export const calculateTimeDifference = (targetDate: Date): TimeDifference => {
  const target = new Date(targetDate);
  const now = new Date();
  const deltaInMiliseconds = Math.abs(target.getTime() - now.getTime());
  let deltaInSeconds = deltaInMiliseconds / 1000;

  const days = Math.floor(deltaInSeconds / 86400);
  deltaInSeconds -= days * 86400;

  const hours = Math.floor(deltaInSeconds / 3600) % 24;
  deltaInSeconds -= hours * 3600;

  const minutes = Math.floor(deltaInSeconds / 60) % 60;
  deltaInSeconds -= minutes * 60;

  return {
    days,
    hours,
    minutes,
    seconds: Math.round(deltaInSeconds),
    miliseconds: deltaInMiliseconds % 1000,
  };
};

export function getFormattedLaunchDate(
  LaunchDate: Date,
  status: string,
): FormattedLaunchDateReturn {
  const elements = translateDate(LaunchDate);
  const timezoneOffset = LaunchDate.getTimezoneOffset() / 60;

  switch (status) {
    case 'Postponed':
      return {
        text: 'Oczekuje na nową datę',
      };

    default:
      return {
        text: `${elements.full} UTC${
          timezoneOffset * -1 !== 0
            ? (timezoneOffset < 0 ? '+' : '-') + Math.abs(timezoneOffset)
            : ''
        }`,
        color: 'rgba(255, 0, 0, 1)',
      };
  }
}

export const translateDate = (dt: Date) => {
  const date = new Date(dt);
  return {
    day: addLeadingZero(date.getDate()),
    month: addLeadingZero(date.getMonth() + 1),
    year: date.getFullYear().toString(),
    hour: addLeadingZero(date.getHours()),
    minutes: addLeadingZero(date.getMinutes()),
    full: `${addLeadingZero(date.getDate())}.${addLeadingZero(
      date.getMonth() + 1,
    )}.${date.getFullYear()}, ${addLeadingZero(date.getHours())}:${addLeadingZero(
      date.getMinutes(),
    )}`,
  };
};

export const translateMonth = (month: number) => {
  const monthNames = {
    short: ['STY', 'LUT', 'MAR', 'KWI', 'MAJ', 'CZE', 'LIP', 'SIE', 'WRZ', 'PAŹ', 'LIS', 'GRU'],
    long: [
      'Stycznia',
      'Lutego',
      'Marca',
      'Kwietnia',
      'Maja',
      'Czerwca',
      'Lipca',
      'Sierpnia',
      'Września',
      'Października',
      'Listopada',
      'Grudnia',
    ],
  };

  return {
    short: monthNames.short[month - 1] || '',
    long: monthNames.long[month - 1] || '',
  };
};
