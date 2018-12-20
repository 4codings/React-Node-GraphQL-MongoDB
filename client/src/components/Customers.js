import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { GET_CUSTOMERS } from '../queries';

class Customers extends Component {
    render() {
        return (
            <Query query={GET_CUSTOMERS}>
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) console.log(error);

                    return (
                        <ul>
                            {data.customers.map(customer => (
                                <li key={customer.id}>
                                    <p>{customer.name}</p>
                                    <p>{customer.email}</p>
                                </li>
                            ))}
                        </ul>
                    );
                }}
            </Query>
        );
    }
}

export default Customers;
