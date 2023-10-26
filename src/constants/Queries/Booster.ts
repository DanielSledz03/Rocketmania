import { gql } from '@apollo/client';

export const GET_BOOSTER_DETAILS = gql(`
query getBoosterDetails($boosterID: ID) {
    allBooster(
      where: {  _id: { eq: $boosterID } }
    ) {
      name
      facts
      status
      currentLocation
      _id
      image {
        asset {
          url
        }
      }
    }
  }   
    `);

export const GET_BOOSTER_MISSIONS = gql(`
{
  allMission(where: { rocket: { name: { eq: "Falcon 9 Block 5" } } }) {
    name
    date
    launchPad
    landingPad{
      landingPad
      boosterName
    }
    status
    _id

    boosters {
      _id
    }
  }
}

`);
