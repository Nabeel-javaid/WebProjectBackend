
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');
require('dotenv').config();

const port = process.env.PORT || 3000;

// const Middleware = require('../assets/middleware')
// const SignUpRouter = require("./routers/signup");
// const Login = require("./routers/login")
// const jobPost = require('./routers/jobList');
// const application = require('./routers/application')
// const appliedApplication = require('./routers/appliedApplication')

const FlightBook = require('./routers/flightBookingRoute.js');
const Flight = require('./routers/flightsRouter.js');
const Passenger = require('./routers/PassengerRouter.js');



//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/flightBooking', FlightBook);

app.use('/flight', Flight);
app.use('/passenger', Passenger);



// Connect to MongoDB
mongoose.connect(process.env.ATLAS_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() =>{

    console.log("connected to mongoDB ");
    

}) .catch((error)=>{

console.log("error connecting to mongoDB: ", error)
})


app.listen(port, ()=>{

console.log(`Server listening on port ${port}`)
}); 