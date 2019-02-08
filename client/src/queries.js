import gql from 'graphql-tag';

export const GET_CUSTOMERS = gql`
    {
        customers {
            id
            name
            email
        }
    }
`;

export const GET_CUSTOMER = gql`
    query Customer($id: String!) {
        customer(id: $id) {
            id
            name
            email
        }
    }
`;

export const CREATE_CUSTOMER = gql`
    mutation CreateCustomer($name: String!, $email: String!){
        createCustomer(name: $name, email: $email) {
            name,
            email,
        }
    }
`;

export const UPDATE_CUSTOMER = gql`
    mutation UpdateCustomer($id: String!, $name: String, $email: String){
        updateCustomer(id: $id, name: $name, email: $email) {
            id,
            name,
            email,
        }
    }
`;

export const DELETE_CUSTOMER = gql`
    mutation DeleteCustomer($id: String!){
        deleteCustomer(id: $id) {
            id
        }
    }
`;
