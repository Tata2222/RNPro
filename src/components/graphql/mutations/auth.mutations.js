import {gql} from 'graphql-tag';

export const LOGIN = gql`
  mutation Login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      ok
      token
      error
    }
  }
`;

export const CREATE_ACCOUNT = gql`
  mutation CreateAccount($firstName: String!, lastName: String, userName: String!, email: String!, password: String!) {
    createAccount(firstName: $firstName, lastName: $lastName, userName: $userName, email: $email, password: $password) {
      ok
      error
    }
  }
`;
