const flightBookingModel = require('../model/FlightBookingModel');

// Create and Save a new FlightBooking
const createFlightBooking = async (req, res) => {

    try {

        console.log(req.body)   
        const flightBooking = await flightBookingModel.create(req.body);
    res.status(201).json(flightBooking);
    } catch (error) {
        res.status(500).json({ error: "Failed to create flightBooking" });
    }
}

//save flightBooking
// const saveFlightBooking = async (req, res) => {
//     try {
//         const flightBooking = await req.body.save();
//         res.status(201).json(flightBooking);
//     } catch (error) {
//         res.status(500).json({ error: "Failed to create flightBooking" });
//     }
// }


// Retrieve all FlightBookings from the database.
const getAllFlightBookings = async (req, res) => {
    try {
        const flightBookings = await flightBookingModel.find();
        res.json(flightBookings);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch flightBookings" });
    }
}

// Retrieve a single FlightBooking with a flightBookingId
const getFlightBookingById = async (req, res) => {
    try {
        const flightBooking = await flightBookingModel.findOne({ price: req.params.price });
        if (flightBooking) {
            const flightByID = await flightBookingModel.find({ _id: flightBooking._id })
            res.json(flightBooking);
        } else {
            res.status(404).json({ error: 'flightBooking not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch flightBooking' });
    }
}
// Update a FlightBooking identified by the flightBookingId in the request
const updateFlightBooking = async (req, res) => {
    try {
        const flightBooking = await flightBookingModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (flightBooking) {
            res.json(flightBooking);
        } else {
            res.status(404).json({ error: 'FlightBooking not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update flightBooking' });
    }
}

// Delete a FlightBooking with the specified flightBookingId in the request
const deleteFlightBooking = async (req, res) => {
    try {
        const flightBooking = await flightBookingModel.findOne({ price: req.params.price });

        if (flightBooking) {

            const deletedFlight = await flightBookingModel.findByIdAndDelete({ _id: flightBooking._id })
            res.json({ message: 'flightBooking deleted successfully' });
        }  else {
            res.status(404).json({ error: 'flightBooking not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete flightBooking' });
    }
}

module.exports = {
    createFlightBooking,
    getAllFlightBookings,
    getFlightBookingById,
    updateFlightBooking,
    deleteFlightBooking
}



