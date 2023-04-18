import { gql } from "@apollo/client";

export const SIGN_UP = gql`
  mutation SignUp($username: String!, $email: String!, $password: String!) {
    signUp(username: $username, email: $email, password: $password)
  }
`;

export const SIGN_IN = gql`
  mutation SignIn($password: String!, $email: String!) {
    signIn(password: $password, email: $email)
  }
`;

export const IS_AUTH = gql`
query User {
  user {
    id
  }
}
`;