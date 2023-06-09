const mongoose = require('mongoose');

const passengerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    passportNumber: {
        type: String,
        required: true
    },
    cnic: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

const Passenger = mongoose.model('Passenger', passengerSchema);

module.exports = Passenger;
