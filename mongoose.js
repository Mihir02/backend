const mongoose = require('mongoose')

// require('dotenv').config();

// Using Mongo DB atlas
// const atlas = process.env.DATABASE_URI
const atlas = "mongodb+srv://robert:student123@cluster0.qp7kj7u.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(atlas, { family: 4 })
    .then(() => { console.log('connected to Database') })
    .catch((err) => { console.log('Opps cant connect to Database ' + err) })


const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    selectedBatch: {
        type: String,
        required: true,
    }
})


const collection = mongoose.model('userdata', schema)

module.exports = collection