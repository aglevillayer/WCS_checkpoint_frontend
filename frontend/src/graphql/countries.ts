import { gql } from "@apollo/client";

export const queryCountries = gql`
  query getCountries {
    items: countries {
      id
      name
      emoji
    }
  }
`;
