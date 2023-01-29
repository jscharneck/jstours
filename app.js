// const fs = require('fs');
const express = require("express");
const app = express();
const cors = require('cors');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');


const morgan = require('morgan');

//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


app.use((req, res  , next) => {    
    req.requestTime = new Date().toISOString();
    next();
});

//GET METHODS

// app.get('/api/v1/tours/', getAllTours );
// app.get('/api/v1/tours/:id', getTour);
// app.post('/api/v1/tours/', createTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);


// 3} Routes

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports  = app;





