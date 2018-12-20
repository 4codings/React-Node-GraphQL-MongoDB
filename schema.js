const schema = `
    type Customer {
      name: String
      email: String
    }

    type Query {
        customers: [Customer]
        customer(id: String!): Customer
    }
`;

module.exports = schema;
