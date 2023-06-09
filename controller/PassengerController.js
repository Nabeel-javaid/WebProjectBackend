const PassengerModel = require('../model/PassengerModel');

// Create and Save a new Passenger
const createPassenger = async (req, res) => {

    try {

        const passenger = await PassengerModel.create(req.body);

        //    console.log(req.body)    
        //const passenger = await req.body.save();

        res.status(201).json(passenger);
    } catch (error) {
        res.status(500).json({ error: "Failed to create passenger" });
    }
}

// Retrieve all Passengers from the database.
const getAllPassengers = async (req, res) => {
    try {
        const passengers = await PassengerModel.find();
        res.json(passengers);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch passengers" });
    }
}

// Retrieve a single Passenger with a passengerId
const getPassengerById = async (req, res) => {
    try {
        const Passenger = await PassengerModel.findOne({ cnic: req.params.cnic });
        if (Passenger) {
            const flightByID = await PassengerModel.find({ _id: Passenger._id })
            res.json(Passenger);
        } else {
            res.status(404).json({ error: 'Passenger not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch passenger' });
    }
}

// Update a Passenger identified by the passengerId in the request
const updatePassenger = async (req, res) => {
    try {
        const passenger = await PassengerModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (passenger) {
            res.json(passenger);
        } else {
            res.status(404).json({ error: 'Passenger not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update passenger' });
    }
}

// Delete a Passenger with the specified passengerId in the request
const deletePassenger = async (req, res) => {
    try {
        const Passenger = await PassengerModel.findOne({ cnic: req.params.cnic });

        
        if (Passenger) {

            const deletedFlight = await PassengerModel.findByIdAndDelete({ _id: Passenger._id })
            res.json({ message: 'Passenger deleted successfully' });
        }  else {
            res.status(404).json({ error: 'Passenger not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch Passenger' });
    }
}

module.exports = {
    createPassenger,
    getAllPassengers,
    getPassengerById,
    updatePassenger,
    deletePassenger
}

