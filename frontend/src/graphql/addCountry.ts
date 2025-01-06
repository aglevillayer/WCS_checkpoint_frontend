import { gql } from "@apollo/client";

export const mutationAddCountry = gql`
  mutation ($data: NewCountryInput!) {
    item: addCountry(data: $data) {
      name
      emoji
      code
    }
  }
`;

// variables:
// {
//     "data": {
//       "name": null,
//       "emoji": null
//       "code":null
//     }
//   }
