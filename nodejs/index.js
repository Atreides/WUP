const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/wupdb",
 {useNewUrlParser: true, useUnifiedTopology: true});

let Schema = mongoose.Schema;
let messagesSchema = new Schema({
    author: String,
    text: String
})
const db = mongoose.model('massages', messagesSchema);

const app = express();
// const db = {};
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

require('./CRUD/index')(app, db);

app.listen(8000, () => {
    console.log('listen 8000...');
});