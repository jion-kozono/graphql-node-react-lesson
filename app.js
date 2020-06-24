const express = require("express")
const graphqlHTTP = require('express-graphql')
const mongoose = require("mongoose");
const schema = require('./schema/schema')
const app = express()

mongoose.connect('mongodb+srv://test:test1234@cluster0-ro7la.mongodb.net/test?retryWrites=true&w=majority')
mongoose.connection.once('open', () => {
    console.log('db concected')
})
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))
app.listen(4000, () => {
    console.log('listning 4000 port')
})