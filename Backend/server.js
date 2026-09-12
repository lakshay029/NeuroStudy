import dotenv from 'dotenv'
dotenv.config();

import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url';
import connectDB from './config/db.js'
import errorHandler from './middleware/errorHandler.js' 
import authRoute from './routes/authRoutes.js'

//ES6 module_dirname alternative

const _filename = fileURLToPath(import.meta.url);
const __dirname= path.dirname(_filename);

//initialise express app
const app= express();

//connect to mongo db 
connectDB();

//middler ware to handle cors
app.use(
    cors({
        origin:"*",
        methods:['GET','POST','PUT','DELETE'],
        allowedHeaders:['Contant-type','Authorization'],
        credentials:true,
    })
)


app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/uploads',express.static(path.join(__dirname,'upload')));

//routes

app.use('/api/auth', authRoute)



app.use(errorHandler);









//404 hanndle

app.use((req,res)=>{
    res.send(404).json({
        success:false,
        error:"Route not found",
        statusCode:404
    });
});

// start server 

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server is live at ${PORT}`)
});

process.on('unhandledRejection',(err)=>{
    console.log(`Error: ${err.message}`);
    process.exit(1);
});

