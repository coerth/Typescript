const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Person" type defines the queryable fields for every person in our data source.
  type Person {
    _id: ID!
    name: String!
    age: Int
    address: Address 
    
  }

  type Address {
    _id: ID!
    street: String!
  }

  type Mechanic {
    _id: ID!
    name: String!
    email: String
    title: String
    experience: Int!
    people: [Person!]! # This is a relationship field (Many to One)
    timepris: Int
  }
  

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  # The "books" query accepts an optional "author" argument of type String. And returns a list always (even if it's empty). Never null. And content will allways be a Book object or empty. never null.
  type Query {
    people: [Person!]!
    addresses: [Address!]!
    mechanics: [Mechanic!]!
    person(id: ID): Person!
    address(id: ID): Address!
    mechanic(id: ID): Mechanic!
  }

  type Mutation{
    createAddress(input: AddressInput!): Address
    deleteAddress(id: ID!): Boolean
    updateAddress(id: ID!, input: AddressInput!): Address
    updateMechanic(id: ID!, input: MechanicInput!): Mechanic
    createPerson(input: PersonInput!): Person
  }
  
  input PersonInput {
    name: String!
    age: Int
    address: ID
  }

  input MechanicInput {
    name: String
    email: String
    title: String
    experience: Int!
    people: [ID]
  }

  input AddressInput {
    street: String!
    }

`;

export default typeDefs;