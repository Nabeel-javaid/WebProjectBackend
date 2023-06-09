const Flight = require('../model/FlightsModel');

// Create and Save a new Flight
const createFlight = async (req, res) => {

    try {

        console.log(req.body)
        const flight = await Flight.create(req.body);
        // const flight = await req.body.save();

        //const flight = await req.body.save();

        res.status(201).json(flight);
    } catch (error) {
        res.status(500).json({ error: "Failed to create flight" });
    }
}


// Retrieve all Flights from the database.
const getAllFlights = async (req, res) => {
    try {
        const flights = await Flight.find();
        res.json(flights);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch flights" });
    }
}

// Retrieve a single Flight with a flightId
const getFlightById = async (req, res) => {
    try {
        const flight = await Flight.findOne({ flightNumber: req.params.id });
        if (flight) {
            const flightByID = await Flight.find({ _id: flight._id })
            res.json(flight);
        } else {
            res.status(404).json({ error: 'Flight not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch flight' });
    }
}

// Update a Flight identified by the flightId in the request
const updateFlight = async (req, res) => {
    try {
        const flight = await Flight.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (flight) {
            res.json(flight);
        } else {
            res.status(404).json({ error: 'Flight not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update flight' });
    }
}

// Delete a Flight with the specified flightId in the request
const deleteFlight = async (req, res) => {
    try {

        const flight = await Flight.findOne({ flightNumber: req.params.id });
        if (flight) {

            const deletedFlight = await Flight.findByIdAndDelete({ _id: flight._id })
            res.json({ message: 'Flight deleted successfully' });
        } else {
            res.status(404).json({ error: 'Flight not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete flight' });
    }
}

// Delete all Flights from the database.
const deleteAllFlights = async (req, res) => {
    try {
        const flight = await Flight.deleteMany();
        if (flight) {
            res.json({ message: 'All flights deleted successfully' });
        } else {
            res.status(404).json({ error: 'Flights not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete flights' });
    }
}

module.exports = {
    createFlight,
    getAllFlights,
    getFlightById,
    updateFlight,
    deleteFlight,
    deleteAllFlights
}


