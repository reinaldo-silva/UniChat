import { gql } from "@apollo/client";

export const GET_USERS = gql`
""" colocar query """
query{
  getUsers{ 
    id
    name
    ra
  }
}
`;
