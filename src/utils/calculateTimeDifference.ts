interface TimeDifference {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  miliseconds: number;
}

export const calculateTimeDifference = (targetDate: Date): TimeDifference => {
  const target: any = new Date(targetDate);
  const now: any = new Date();
  let deltaInSeconds = Math.abs(target - now) / 1000;

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
    miliseconds: Math.abs(target - now) / 1000,
  };
};
