import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { GET_CUSTOMERS } from '../../queries';
import s from './home.css';

class Home extends Component {
    render() {
        return (
            <Query query={GET_CUSTOMERS}>
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) console.log(error);

                    return (
                        <div>
                            {data.customers.map(customer => (
                                <div className={s.customer} key={customer.id}>
                                    <p>Id: {customer.id}</p>
                                    <p>Name: {customer.name}</p>
                                    <p>E-mail: {customer.email}</p>
                                </div>
                            ))}
                        </div>
                    );
                }}
            </Query>
        );
    }
}

export default Home;
