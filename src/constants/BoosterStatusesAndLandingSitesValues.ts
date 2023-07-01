export enum LandingSites {
  ASOG_BARGE = 'ASOGBarge',
  JRTI_BARGE = 'JRTIBarge',
  OCISLY_BARGE = 'OCISLYBarge',
  DISSASEMBLED_INTO_PARTS = 'DissasembledIntoParts',
  WAITING_FOR_A_FLIGHT = 'WaitingForAFlight',
  IN_THE_PROCESS_OF_RENEWAL = 'InTheProcessOfRenewal',
  WAITING_FOR_ASSIGMENT = 'WaitingForAssigment',
  TESTED_IN_MC_GREGOR = 'TestedInMcGregor',
  DESTROYED = 'Destroyed',
  UNKNOWN = 'Unknown',
  AT_PORT_CANAVERAL = 'AtPortCanaveral',
  AT_THE_PORT_OF_LONG_BEACH = 'AtThePortOfLongBeach',
  ON_LANDING_PAD_LZ_1 = 'OnLandingPadLZ1',
}

export const LandingSitesValues = [
  { value: LandingSites.ASOG_BARGE, label: 'Na barce ASoG' },
  { value: LandingSites.JRTI_BARGE, label: 'Na barce JRTI' },
  { value: LandingSites.OCISLY_BARGE, label: 'Na barce OCISLY' },
  { value: LandingSites.ON_LANDING_PAD_LZ_1, label: 'Na lądowisku LZ-1' },
  { value: LandingSites.TESTED_IN_MC_GREGOR, label: 'Testowany w McGregor' },
  { value: LandingSites.DESTROYED, label: 'Zniszczony' },
  { value: LandingSites.IN_THE_PROCESS_OF_RENEWAL, label: 'W renowacji' },
  { value: LandingSites.UNKNOWN, label: 'Nieznany' },
  { value: LandingSites.DISSASEMBLED_INTO_PARTS, label: 'Rozłożony na części' },
  {
    value: LandingSites.WAITING_FOR_ASSIGMENT,
    label: 'Oczekuje na przypisanie',
  },
  { value: LandingSites.WAITING_FOR_A_FLIGHT, label: 'Oczekuje na lot' },
  { value: LandingSites.AT_PORT_CANAVERAL, label: 'W Porcie Canaveral' },
  {
    value: LandingSites.AT_THE_PORT_OF_LONG_BEACH,
    label: 'W Porcie Long Beach',
  },
];
