const mongoose = require('mongoose');
const Message = require('./schemas/courses');

module.exports.connect = () => {
    mongoose.connect('mongodb://localhost/accMeanStack', { useNewUrlParser: true });

    const db = mongoose.connection;

    db.on('error', () => {
        console.error.bind(console, 'connection error...');

        process.exit(1);
    });
    db.once('open', () => {
        let msg = new Message()
        msg.save()
        console.log('AccMeanStack DB Opened');
    });
};
