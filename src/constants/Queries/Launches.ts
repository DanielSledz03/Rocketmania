import { gql } from '@apollo/client';

const GET_FIRST_AVAILABLE_LAUNCH = gql(`
{
  missions {
    data {
      id
      attributes {
        Name
        Date
        Status
        Rocket {
          data {
            attributes {
              Name
              MainImage {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}


`);

const GET_FIRST_X_LAUNCHES = gql(`
query getData($count: Int){
  missions(pagination: { limit: $count }) {
    data {
      id
      attributes {
        Name
        Date
        Status

        Rocket {
          data {
            attributes {
              Name
              MainImage {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  agencies {
    data {
      attributes {
        Name
      }
    }
  }
}
`);

const GET_LIVESTREAM_LINK = gql`
  query ($id: ID) {
    missions(filters: { id: { eq: $id } }) {
      data {
        attributes {
          Livestream
        }
      }
    }
  }
`;

const GET_LAUNCH_DETAILS_BY_ID = gql(`
query ($id: ID){
  missions(filters: {id: {eq: $id}}) {
    data {
      id
      attributes {
        Name
        Date
        Status
        Description
        Specification
        Livestream
        LaunchWindow
        Probability
        ChangeLogs
        Patch {
          data {
            attributes {
              url
            }
          }
        }

        Payloads {
          data {
            attributes {
              Name
              Description
              Specification
              Role
              Photo {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }

        Boosters {
          data {
            id
            attributes {
              Name
              Photo {
                data {
                  attributes {
                    url
                  }
                }
              }
              Status
              InterestingFacts
            }
          }
        }

        Rocket {
          data {
            id
            attributes {
              Name
              MainImage {
                data {
                  attributes {
                    url
                  }
                }
              }

              Agency {
                data {
                  attributes {
                    Name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

  `);

const GET_BOOSTER_DETAILS = gql`
  query getBoosterDetails($id: ID) {
    boosters(filters: { id: { eq: $id } }) {
      data {
        id
        attributes {
          Name
          Photo {
            data {
              attributes {
                url
              }
            }
          }
          Status
          InterestingFacts
          Missions {
            data {
              attributes {
                Name
                LandingPad
                LaunchPad
                Date
                Status
              }
            }
          }
        }
      }
    }
  }
`;

const GET_ROCKET_DETAILS = gql`
  query getRocketDetails($id: ID) {
    rockets(filters: { id: { eq: $id } }) {
      data {
        id
        attributes {
          Name
          GeneralInformation
          CarryingCapacity
          Description
          MainImage {
            data {
              attributes {
                url
              }
            }
          }

          Gallery {
            data {
              attributes {
                url
              }
            }
          }

          Agency {
            data {
              attributes {
                Name
              }
            }
          }

          Engines {
            data {
              attributes {
                Name
              }
            }
          }

          Stages {
            data {
              attributes {
                Name
              }
            }
          }
        }
      }
    }
  }
`;

const GET_VARIANT_DATA = gql`
  query getEnginesData($variant: String) {
    rockets(where: { variant: { Name: $variant } }) {
      Name
      CarryingCapacity
      GeneralInformation
    }
  }
`;

const GET_STAGES_DATA = gql`
  query getStageData($ID: ID) {
    rockets(filters: { id: { eq: $ID } }) {
      data {
        attributes {
          Stages {
            data {
              attributes {
                Name
                Description
                Specification
                Photo {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const GET_ENGINES_DATA = gql`
  query getEnginesData($ID: ID) {
    rockets(filters: { id: { eq: $ID } }) {
      data {
        attributes {
          Engines {
            data {
              attributes {
                Name
                Description
                Specification
                Photo {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
const GET_RELATED_ROCKETS = gql`
  query getAgencyRockets($name: String) {
    agencies(filters: { Name: { eq: $name } }) {
      data {
        attributes {
          Name
          Rockets {
            data {
              attributes {
                Name
                MainImage {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const GET_DATA_BY_ROCKET_NAMES = gql(`
query getDataByRocketName($Name: String, $count: Int) {
  missions(filters: { Name: {containsi: $Name} } , pagination: {limit: $count}) {
    data {
      id
      attributes {
        Name
        Date
        Status
    
        Rocket {
          data {
            attributes {
              Name
              MainImage {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

    `);

const GET_DATA_BY_MISSION_NAME = gql(`
query getDataByMissionName($Name: String, $count: Int) {
  missions(where: { Name: $Name }, limit: $count) {
    id
    Name
    Date
    Status

    Rocket {
      Name
      MainPhoto {
        url
      }
    }
  }
}
    `);

const GET_DATA_BY_AGENCY_NAME = gql(`
query getDataByAgencyName($Name: String, $count: Int) {
  missions(
    filters: {
      Rocket: { Agency: { Name: { eq: $Name } } }
      Published: { eq: true }
    }
    pagination: { limit: $count }
  ) {
    data {
      id
      attributes {
        Name
        Date
        Status
        Published

        Rocket {
          data {
            attributes {
              Name
              MainImage {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }

    meta {
      pagination {
        total
      }
    }
  }
}

    `);

const GET_MISSIONS_ROCKETS_AND_AGENCIES_NAMES = gql(`
query getNames {
  missions {
    data {
      attributes {
        Name
      }
    }
  }

  rockets {
    data {
      attributes {
        Name
      }
    }
  }

  agencies {
    data {
      attributes {
        Name
      }
    }
  }
}

`);

export {
  GET_FIRST_AVAILABLE_LAUNCH,
  GET_LIVESTREAM_LINK,
  GET_LAUNCH_DETAILS_BY_ID,
  GET_BOOSTER_DETAILS,
  GET_ROCKET_DETAILS,
  GET_VARIANT_DATA,
  GET_STAGES_DATA,
  GET_ENGINES_DATA,
  GET_RELATED_ROCKETS,
  GET_DATA_BY_ROCKET_NAMES,
  GET_DATA_BY_MISSION_NAME,
  GET_DATA_BY_AGENCY_NAME,
  GET_FIRST_X_LAUNCHES,
  GET_MISSIONS_ROCKETS_AND_AGENCIES_NAMES,
};
