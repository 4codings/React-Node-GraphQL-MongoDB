import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { GET_CUSTOMER } from '../../queries';
import Link from '../../components/link/Link.tsx';
import { ModalConsumer } from '../../context';
import s from './Detail.css';

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
                    const { customer: { id: _id, name, email } } = data;

                    return (
                        <>
                            <div className={s.customer}>
                                <p><span style={{ fontWeight: 'bold' }}>Id:</span> {_id}</p>
                                <p><span style={{ fontWeight: 'bold' }}>Name:</span> {name}</p>
                                <p><span style={{ fontWeight: 'bold' }}>E-mail:</span> {email}</p>
                            </div>
                            <ModalConsumer>
                                {({ open }) => (
                                    <>
                                        <button type="button" onClick={() => open('edit')}>Edit</button>
                                        <button type="button" onClick={() => open('delete')}>Delete</button>
                                    </>
                                )}
                            </ModalConsumer>
                            <Link to="/">Back</Link>
                        </>
                    );
                }}
            </Query>
        );
    }
}

export default Detail;
