import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import contactRouter from './routes/contact.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 10000, // 10 seconds
    socketTimeoutMS: 45000 // 45 seconds
  })
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => {
    console.error('❌ Connection failed:', err.message);
    console.log('Verify:');
    console.log('1. Password is URL-encoded');
    console.log('2. IP is whitelisted in Atlas');
    console.log('3. Database user exists');
    process.exit(1);
  });
// Routes
app.use('/api/contact', contactRouter);

// For Central Error Handling
app.use((err, req, res, next) => {
  console.error('[SERVER ERROR]', err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// TO Start Server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

// For shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    mongoose.connection.close(false, () => {
      console.log('MongoDB connection closed');
      process.exit(0);
    });
  });
});