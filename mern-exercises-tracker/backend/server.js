const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const database = require('./config/database')

const exercisesRoutes = require('./routes/exercises')
const usersRoutes = require('./routes/users')


dotenv.config();
database.connect()

const app = express();
const port = process.env.PORT || 8000;


app.use(cors());
app.use(express.json())

app.use('/exercises', exercisesRoutes)
app.use('/users', usersRoutes)


app.listen(port,() => {
    console.log('Server runnig at port: ', port);
});