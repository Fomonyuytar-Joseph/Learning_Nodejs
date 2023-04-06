const express = require("express");
const morgan = require("morgan");


const tourRouter =require('./routes/tourRoutes')
const userRouter =require('./routes/userRoutes')

const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json());

 


app.use("/api/v1/users", userRouter);
app.use("/api/v1/tours", tourRouter);

module.exports= app

// app.use((req, res, next) => {
//next()

// })

// app.get("/api/v1/tours",getAllTours)

// app.get("/api/v1/tours/:id",getTour);

// //post request
// app.post("/api/v1/tours", createTour);

// //patch request
// app.patch('/api/v1/tours/:id',updateTour)

// //delete request
// app.delete('/api/v1/tours/:id', deleteTour)

//routes 
 


