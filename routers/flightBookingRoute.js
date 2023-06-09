const express = require('express');
const router = express.Router();

const flightBookingController = require('../controller/flightBookingController');

// Create a new flightBooking
router.post('/createFlightBooking', flightBookingController.createFlightBooking);
// Update a flightBooking
router.put('/updateFlightBooking/:id', flightBookingController.updateFlightBooking);
// Delete a flightBooking
router.delete('/deleteFlightBooking/:price', flightBookingController.deleteFlightBooking);
// Get all flightBookings
router.get('/getAllFlightBookings', flightBookingController.getAllFlightBookings);
// Get a flightBooking by id
router.get('/getFlightBookingById/:price', flightBookingController.getFlightBookingById);

module.exports = router;
