import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import queryString from 'query-string';
import history from './history';
import router from './router';
import s from './client.css';

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
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
                <div className="App">
                    {route.component}
                </div>
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
