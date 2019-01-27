import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query, compose, graphql } from 'react-apollo';
import { GET_CUSTOMER, GET_CUSTOMERS, DELETE_CUSTOMER } from '../../queries';
import history from '../../history';
import Link from '../../components/link/Link.tsx';
import s from './Detail.css';

class Detail extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        deleteCustomer: PropTypes.func.isRequired,
    }

    edit = () => {
        console.log('edit');
    }

    delete = (id) => {
        const { deleteCustomer } = this.props;
        deleteCustomer({ variables: id });
    }

    render() {
        const { id } = this.props;

        return (
            <Query query={GET_CUSTOMER} variables={{ id }}>
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) console.log(error);
                    const { customer: { id: _id, name, email } } = data;

                    return (
                        <>
                            <div className={s.customer}>
                                <p><span style={{ fontWeight: 'bold' }}>Id:</span> {_id}</p>
                                <p><span style={{ fontWeight: 'bold' }}>Name:</span> {name}</p>
                                <p><span style={{ fontWeight: 'bold' }}>E-mail:</span> {email}</p>
                            </div>
                            <button type="button" onClick={this.edit}>Edit</button>
                            <button type="button" onClick={() => this.delete()}>Delete</button>
                            <Link to="/">Back</Link>
                        </>
                    );
                }}
            </Query>
        );
    }
}

export default compose(
    graphql(DELETE_CUSTOMER, {
        name: 'deleteCustomer',
        options: {
            update: (cache, { data: { deleteCustomer: { id } } }) => {
                try {
                    const { customers } = cache.readQuery({ query: GET_CUSTOMERS });
                    cache.writeQuery({
                        query: GET_CUSTOMERS,
                        data: { customers: customers.filter(customer => customer.id !== id) },
                    });
                    history.push('/');
                } catch (err) {
                    console.log(err);
                }
            },
        },
    }),
)(Detail);
