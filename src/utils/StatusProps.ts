export function StatusProps(status: string) {
  switch (status) {
    case 'Success':
      return {
        text: 'ZAKOŃCZONA SUKCESEM',
        color: 'rgba(0, 255, 10, 1)',
      };

    case 'Failed':
      return {
        text: 'NIEPOWODZENIE',
        color: 'rgba(255, 0, 0, 1)',
      };

    case 'Confirmed':
      return {
        text: 'POTWIERDZONA',
        color: 'rgba(255, 255, 255, 1)',
      };

    case 'ToBeConfirmed':
      return {
        text: 'NIEPOTWIERDZONA',
        color: 'rgba(255, 255, 255, 1)',
      };

    case 'Hold':
      return {
        text: 'WSTRZYMANA',
        color: 'rgba(245, 179, 8, 1)',
      };

    case 'Canceled':
      return {
        text: 'ANULOWANA',
        color: 'rgba(255, 0, 0, 1)',
      };

    case 'Postponed':
      return {
        text: 'PRZEŁOŻONA',
        color: 'rgba(245, 179, 8, 1)',
      };

    case 'InFlight':
      return {
        text: 'W TRAKCIE LOTU',
        color: 'rgba(0, 255, 10, 1)',
      };

    default:
      return {
        text: 'ERROR',
        color: 'rgba(255, 0, 0, 1)',
      };
  }
}
