export const translateMonth = (month: number) => {
  switch (month) {
    case 1:
      return { short: 'STY', long: 'Stycznia' };

    case 2:
      return { short: 'LUT', long: 'Lutego' };

    case 3:
      return { short: 'MAR', long: 'Marca' };

    case 4:
      return { short: 'KWI', long: 'Kwietnia' };

    case 5:
      return { short: 'MAJ', long: 'Maja' };

    case 6:
      return { short: 'CZE', long: 'Czerwca' };

    case 7:
      return { short: 'LIP', long: 'Lipca' };

    case 8:
      return { short: 'SIE', long: 'Sierpnia' };

    case 9:
      return { short: 'WRZ', long: 'Września' };

    case 10:
      return { short: 'PAŹ', long: 'Października' };

    case 11:
      return { short: 'LIS', long: 'Listopada' };

    case 12:
      return { short: 'GRU', long: 'Grudnia' };

    default:
      return { short: '', long: '' };
  }
};
