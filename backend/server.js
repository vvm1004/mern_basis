require('dotenv').config()

const express = require('express')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

const mongoose = require('mongoose')
const cors = require('cors')


//express app
const app = express()

//middleware
app.use(express.json())
app.use(cors());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//routes 
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)


//connect to db
mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port ', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
