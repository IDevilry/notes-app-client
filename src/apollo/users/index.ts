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
    query User($username: String!) {
        user(username: $username) {
            id
            username
            email
            notes
            createdAt
        }
  }
`;
