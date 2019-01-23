import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { GET_CUSTOMERS } from '../../queries';
import Link from '../../components/link/Link';
import s from './Home.css';

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
                                    <p><span className={s.bold}>Id:</span> {customer.id}</p>
                                    <p><span className={s.bold}>Name:</span> {customer.name}</p>
                                    <p><span className={s.bold}>E-mail:</span> {customer.email}</p>
                                </div>
                            ))}
                            <Link to="/add">Add customer</Link>
                        </div>
                    );
                }}
            </Query>
        );
    }
}

export default Home;
