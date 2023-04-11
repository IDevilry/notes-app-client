import {gql} from '@apollo/client'

export const getNotes = gql`
    query Notes {
        notes {
          id
          title
          content
          createdAt
          updatedAt
        }
      }
`;
