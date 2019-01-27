const schema = `
    type Customer {
        id: String!
        name: String!
        email: String!
    }

    type Query {
        customers: [Customer!]!
        customer(id: String!): Customer!
    }

    type Mutation {
        createCustomer(name: String!, email: String!): Customer!
        updateCustomer(id: String!, name: String, email: String): Customer!
        deleteCustomer(id: String!): Customer
    }
`;

module.exports = schema;
