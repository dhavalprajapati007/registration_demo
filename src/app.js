import express from "express";
import dotenv from 'dotenv'
import cors from 'cors';
import authRoutes from './routes/auth.routes.js'
import schoolRoutes from './routes/school.routes.js'
import standardRoutes from './routes/standard.routes.js'
import educationBoardRoutes from './routes/educationBoard.routes.js'
import mediumRoutes from './routes/medium.routes.js'

import connectDB from "./db/connect.js";

dotenv.config({
    path: './.env'
})

connectDB().then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is listening on port : ${process.env.PORT}`)
    })
}).catch((err) => {
    console.log('MongoDb connection failed !!', err)
})

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    optionsSuccessStatus: 200,
    credentials: true
}))

app.use(express.json({ limit: '16kb' }))
app.use(express.urlencoded({ limit: '16kb', extended: true }))

let PORT = process.env.PORT || 8000;

app.use('/api/v1/users', authRoutes)
app.use('/api/v1/organization', schoolRoutes)
app.use('/api/v1/standard', standardRoutes)
app.use('/api/v1/education-board', educationBoardRoutes)
app.use('/api/v1/medium', mediumRoutes)