import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation($ra: String!, $password: String!, $name: String!) {
    createUser(data: { ra: $ra, password: $password, name: $name }) {
      id
      name
    }
  }
`;
