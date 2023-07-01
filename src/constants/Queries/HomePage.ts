import { gql } from '@apollo/client';

export const getFirstLaunch = gql(`
    {
      allMission {
        name
        date
        status
        rocket{
          name
          image {
            asset{
              url
            }
          }
        }
    
        _id
      }
    }
    
  
    `);
