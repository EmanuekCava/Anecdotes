import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config()
import './data/database'
const app = express()

import anecdoteRoute from './routes/anecdote.routes';
import userRoute from './routes/user.routes';

app.set('port', process.env.PORT || 2000)

app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(anecdoteRoute)
app.use(userRoute)

app.listen(app.get('port'), () => {
    console.log("Server on port", app.get('port'));
})
