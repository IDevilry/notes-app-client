import { gql } from "@apollo/client";

export const USERS = gql`
  query Users {
    users {
      id
      username
      notes
      createdAt
    }
  }
`;

export const USER_BY_ID = gql`
  query UserById($id: ID!) {
    profile: userById(id: $id) {
      id
      username
      email
      createdAt
      updatedAt
    }
  }
`;

export const USER_FAVORITE_NOTES = gql`
  query FavoritesNotes {
    user {
      notes: favoritesNotes {
        id
        title
        content
        category
        author {
          username
        }
        addedToFavoriteTimes
        createdAt
      }
    }
  }
`;
