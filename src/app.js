import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import { dbConnection } from './database/dbConnection.js';
import messageRouter from './src/router/messageRouter.js';
import {errorMiddleware} from './middlewares/errorMiddleware.js';
import userRouter from './src/router/userRouter.js';
import appointmentRouter from "./src/router/appointmentRouter.js";
import dotenv from "dotenv";

const app = express();
dotenv.config({path: './.env'});

app.use(cors({
    origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
})
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(fileUpload(
    {
        useTempFiles: true,
        tempFileDir: '/tmp/'
    }       
));

app.use('/api/v1/message', messageRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/appointment', appointmentRouter);
dbConnection();

app.use(errorMiddleware);
export default app;