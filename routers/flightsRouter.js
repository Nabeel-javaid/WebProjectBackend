const express = require('express');
const router = express.Router();

const flightsController = require('../controller/flightsController');




// Create a new flight
router.post('/createFlight', flightsController.createFlight);




// Update a flight
router.put('/updateFlight/:id', flightsController.updateFlight);
// Delete a flight
router.delete('/deleteFlight/:id', flightsController.deleteFlight);
// Get all flights
router.get('/getAllFlights', flightsController.getAllFlights);
// Get a flight by id
router.get('/getFlightById/:id', flightsController.getFlightById);
//delete all flights
router.delete('/deleteAllFlights', flightsController.deleteAllFlights);

module.exports = router;
