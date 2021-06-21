const mongoose = require('mongoose');
require('dotenv').config();

const DB_PASS = process.env.MONGO_DB_PASS
const DB_USER = process.env.MONGO_DB_USER
const DB_NAME = process.env.MONGO_DB_NAME

const dbConfig = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.jhzfs.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection;