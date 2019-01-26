import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { GET_CUSTOMER } from '../../queries';

class Detail extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
    }

    render() {
        const { id } = this.props;

        return (
            <Query query={GET_CUSTOMER} variables={{ id }}>
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) console.log(error);
                    const { customer: { id: customerId, name, email } } = data;

                    return (
                        <>
                            <p>{customerId}</p>
                            <p>{name}</p>
                            <p>{email}</p>
                        </>
                    );
                }}
            </Query>
        );
    }
}

export default Detail;
