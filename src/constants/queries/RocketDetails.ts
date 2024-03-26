import { gql } from "@apollo/client";

export const GET_ROCKET_DETAILS = gql(`
query getRocketByID($id: ID) {
  allRocket(where: { _id: { eq: $id } }) {
    _id
    name
    description
    generalInformations
    carrying_capacity 
    successfull_launches
    failed_launches
    
    image {
      asset {
        url
      }
    }
    gallery {
      image {
        asset {
          url
        }
      }
    }
    Agencies {
      _id
      name
    }
    stages {
      _id
      name
      image {
        asset {
          url
        }
      }
      description
      specifications
    }
    engines {
      _id
      name
      image {
        asset {
          url
        }
      }
      description
      specifications
    }
  }
}  
`);

export const GET_ROCKET_LAST_LAUNCHES = gql(`
query getLastRocketLaunches($rocketId: ID) {
  allMission(
    where: {
      rocket: { _id: { eq: $rocketId } }
      archived: { eq: true }
      environment: { eq: "production" }
    }
    sort: [{ date: ASC }]
  ) {
    name
    date
    status
    _id
  }
}

`);
