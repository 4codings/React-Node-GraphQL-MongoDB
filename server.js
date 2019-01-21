const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = require('./grapql/schema');
const resolvers = require('./grapql/resolvers');
const Customer = require('./models/customer');

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected ..'))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 4000;

const app = express();

const server = new ApolloServer({
    typeDefs: gql(typeDefs),
    resolvers,
    context: { Customer },
});
server.applyMiddleware({ app });

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
