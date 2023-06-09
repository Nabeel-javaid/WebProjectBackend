const express = require('express');
const router = express.Router();

const PassengerController = require('../controller/PassengerController');

// Create a new Passenger
router.post('/createPassenger', PassengerController.createPassenger);
// Update a Passenger
router.put('/updatePassenger/:id', PassengerController.updatePassenger);
// Delete a Passenger
router.delete('/deletePassenger/:cnic', PassengerController.deletePassenger);
// Get all Passengers
router.get('/getAllPassengers', PassengerController.getAllPassengers);
// Get a Passenger by id
router.get('/getPassengerById/:cnic', PassengerController.getPassengerById);

module.exports = router;
