import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query, compose, graphql } from 'react-apollo';
import { GET_CUSTOMER, DELETE_CUSTOMER } from '../../queries';


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
                            <p>{_id}</p>
                            <p>{name}</p>
                            <p>{email}</p>
                            <button type="button" onClick={this.edit}>Edit</button>
                            <button type="button" onClick={this.delete}>Delete</button>
                        </>
                    );
                }}
            </Query>
        );
    }
}

export default compose(
    graphql(DELETE_CUSTOMER, { name: 'deleteCustomer' }),
)(Detail);
