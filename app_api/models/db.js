const mongoose = require('mongoose');

let dbURI = "mongodb+srv://si:sisteminformasi@cluster0.zxiwyfw.mongodb.net/sipenamas?retryWrites=true&w=majority";

mongoose.connect(dbURI, {
    useNewUrlParser: true
});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err);
})

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

require('./penelitian');
require('./pengabdian');