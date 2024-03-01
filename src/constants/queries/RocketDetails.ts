import { gql } from '@apollo/client';

export const GET_ROCKET_DETAILS = gql(`
query getRocketByID($id: ID) {
  allRocket(where: { _id: { eq: $id } }) {
    _id
    name
    description
    generalInformations
    carrying_capacity {
      name
      value
    }
    successfull_launches
    failed_launches
    partial_failed_launches
    partial_successfull_launches
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
    agency {
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
    where: { rocket: { _id: { eq: $rocketId } }, archived: { eq: true } }
    sort: [{ date: ASC }]
  ) {
    name
    date
    status
    _id
  }
}
`);
