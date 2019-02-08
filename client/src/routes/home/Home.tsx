import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { GET_CUSTOMERS } from '../../queries';
import Link from '../../components/link';
import s from './Home.css';

class Home extends Component {
    render() {
        return (
            <Query query={GET_CUSTOMERS}>
                {({ loading, error, data }: { loading: boolean, error?: object, data: object }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) console.log(error);

                    return (
                        <>
                            <h1>All:</h1>
                            <div>
                                {data.customers.map(customer => {
                                    const { id, name, email } = customer;
                                    return (
                                        <Link to={`/${customer.id}`} className={s.customer} key={id}>
                                            <p><span className={s.bold}>Id:</span> {id}</p>
                                            <p><span className={s.bold}>Name:</span> {name}</p>
                                            <p><span className={s.bold}>E-mail:</span> {email}</p>
                                        </Link>
                                    )
                                })}
                            </div>
                        </>
                    );
                }}
            </Query>
        );
    }
}

export default Home;
