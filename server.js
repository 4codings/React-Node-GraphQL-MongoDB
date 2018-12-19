const express = require('express');
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema.js');

const app = express();

app.use('/graphql',
    graphqlHTTP({
        schema,
        graphiql: true
    })
);

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected ..'))
    .catch(err => console.log(err));

const PORT = process.env.PORT | 4000

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
