import express, {json} from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import studentRoutes from './routes/studentRoute.js';


dotenv.config()

const app = express()


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use(json())
app.use('/students', studentRoutes)

const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/studentsdb';

mongoose.connect(mongoUri)
    .then(() => console.log('Connected to MongoDB!'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})