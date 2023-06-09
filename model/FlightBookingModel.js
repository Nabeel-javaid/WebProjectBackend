const mongoose = require('mongoose');

const flightBookingSchema = new mongoose.Schema({
    flightType: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: false
    },
    departureAirport: {
        type: String,
        required: true
    },
    arrivalAirport: {
        type: String,
        required: true
    },
    departureTime: {
        type: Date,
        required: true
    },
    arrivalTime: {
        type: Date,
        required: true
    },
    airline: {
        type: String,
        required: false
    }
});

const FlightBooking = mongoose.model('FlightBooking', flightBookingSchema);

module.exports = FlightBooking;
