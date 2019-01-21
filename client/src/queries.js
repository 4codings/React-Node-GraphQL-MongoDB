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
    {
        customer(id: String) {
            id
            name
            email
        }
    }
`;
