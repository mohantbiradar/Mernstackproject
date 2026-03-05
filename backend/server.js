import express from 'express';
import cors from 'cors';
import ConnectDB from './config/db.js';
import adminRouter from './routes/adminRouter.js';

const app = express();

// Use Render’s assigned port
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
ConnectDB();  // Make sure you set MONGO_URI in Render Environment Variables

// Middleware
app.use(express.json());
app.use(cors({
    origin: '*' // temporarily allow all origins
}));
app.use('/admin', adminRouter);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});