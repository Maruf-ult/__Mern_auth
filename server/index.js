import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import cookieParser from 'cookie-parser'
import connectDB from './config/mongodb.js';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';
import transporter from './config/nodeMailer.js';



const app = express();
const port = process.env.PORT || 4000 

connectDB();

const allowedOrigins = ['http://localhost:5173']

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin:allowedOrigins, credentials:true}));


//API endpoints

app.use('/api/auth',authRouter)
app.use('/api/user',userRouter)



transporter.verify((error, success) => {
  if (error) {
    console.log("SMTP Connection Error:", error);
  } else {
    console.log("Server is ready to take messages!");
  }
});

app.listen(port,()=>{
     console.log(`server is running on ${port}`);
})