import express from 'express'
const app = express();
const port = 5000;
import ConnectDB from './config/db.js';
import adminRouter from './routes/adminRouter.js';
import cors from 'cors';
// Connect to MongoDB
// ConnectDB();   type  1 
// Middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', // Adjust this to your frontend URL
}));
app.use('/admin', adminRouter)

// server setup
app.listen(port, () => {
    console.log
    (`Server is running on http://localhost:${port}`);
});