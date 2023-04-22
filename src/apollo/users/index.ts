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
    user: userById(id: $id) {
      id
      username
      email
      createdAt
      updatedAt
      favoritesNotes {
        addedToFavoriteTimes
        content
        createdAt
        id
        title
      }
      notes {
        addedToFavoriteTimes
        content
        createdAt
        id
        title
      }
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
