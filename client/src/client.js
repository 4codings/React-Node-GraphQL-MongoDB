import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import queryString from 'query-string';
import history from './history';
import router from './router';
import { ModalProvider } from './context';
import Modal from './components/modal';
import s from './client.css';

const cache = new InMemoryCache();
const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache,
});
const container = document.getElementById('root');

const render = async (location) => {
    try {
        const context = {
            pathname: location.pathname,
            query: queryString.parse(location.search),
        };
        const route = await router.resolve(context);

        if (route.redirect) {
            history.replace(route.redirect);
            return;
        }

        ReactDOM.render(
            <ApolloProvider client={client}>
                <ModalProvider>
                    <Modal />
                    {route.component}
                </ModalProvider>
            </ApolloProvider>,
            container,
            () => document.title = route.title,
        );
    } catch (error) {
        console.error(error);
    }
};

history.listen(render);
render(history.location);
