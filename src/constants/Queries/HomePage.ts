import { gql } from '@apollo/client';

export const GET_INCOMING_LAUNCH = gql(`
{
  allMission(
    where: { archived: { eq: false } }
    limit: 1
    sort: [{ date: ASC }]
  ) {
    name
    date
    status
    rocket {
      name
      image {
        asset {
          url
        }
      }
    }

    _id
  }
} 
    `);

export const GET_ALL_LAUNCHES = gql(`
{
  allMission(where: { archived: { eq: false } }, sort: [{ date: ASC }]) {
    name
    date
    status
    rocket {
      name
      image {
        asset {
          url
        }
      }
      Agencies {
        name
      }
    }

    _id
  }
}
    `);

export const GET_LAUNCH_BY_ID = gql(`
query getMissionByID($id: ID) {
  allMission(where: { _id: { eq: $id } }) {
    _id
    name
    date
    status
    specifications
    description
    changeLogs
    livestream
    windowEnd
    windowStart
    patch {
      asset {
        url
      }
    }
    archived
    probability
    landingPad {
      boosterName
      landingPad
    }

    rocket {
      _id
      name
      image {
        asset {
          url
        }
      }
    }

    payload {
      _id
      name
      specification
      description
      image {
        asset {
          url
        }
      }
      role
    }

    boosters {
      _id
      name
      image {
        asset {
          url
        }
      }
    }
  }
}
`);
