import { gql } from '@apollo/client';

export const CREATE_ADDRESS = gql`
  # Create a new address
  mutation CreateAddress($input: AddressInput!) {
    createAddress(input: $input) {
      street
    }
  }
`;

export const CREATE_PERSON = gql `
mutation CreatePerson($input: PersonInput!) {
    createPerson(input: $input) {
      name
      age
    }
  }`