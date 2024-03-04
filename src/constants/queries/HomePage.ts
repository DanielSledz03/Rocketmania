import { gql } from "@apollo/client";

export const GET_INCOMING_LAUNCH = gql(`
{
  allMission(
    where: { archived: { eq: false }, environment: { eq: "production" } }
    limit: 1
    sort: [{ date: ASC }]
  ) {
    name
    date
    status
    rocket {
      _id
      name
      image {
        asset {
          _id
          url
        }
      }
    }

    _id
  }
}

    `);

export const GET_ALL_LAUNCHES = gql(`
query GetMissions($limit: Int){
  allMission(
    where: { archived: { eq: false }, environment: {eq: "production"} }
    sort: [{ date: ASC }]
    limit: $limit
  ) {
    name
    date
    status
    rocket {
      _id
      name
      image {
        asset {
          _id
          url
        }
      }
      Agencies{
        name
      }
     
    }
    _id
  }
}# Write your query or mutation here


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
        _id
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
          _id
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
          _id
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
          _id
          url
        }
      }
    }
  }
}
`);
