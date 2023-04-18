import { gql } from "@apollo/client";

export const ALL_USERS = gql`
  query Users {
    users {
      id
      username
      notes
      createdAt
    }
  }
`;

export const USER = gql`
  query User {
    user {
      id
      username
      email
      notes
      createdAt
    }
  }
`;

export const USER_BY_ID = gql`
  query UserById($userByIdId: ID!) {
    userById(id: $userByIdId) {
      id
      username
      email
      createdAt
      updatedAt
    }
  }
`;
