// backend/index.js
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import eventsRouter from './routes/events.js';
import committeeMembersRouter from './routes/committeeMembers.js';
import albumsRouter from './routes/albums.js';
import newslettersRouter from './routes/newsletters.js';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; // Default to 3000 if PORT is not set
const MONGODBURL = process.env.MONGODBURL;

// Allow requests from specific origins (your frontend domains)
const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = [
      'http://localhost:3000', // Local development
      'https://azkonkanis.com', // Your custom domain
      'https://www.azkonkanis.com', // Your www subdomain
      'https://azkonkanis-psi.vercel.app', // Vercel Preview URL
      'https://azka-psi.vercel.app', // Another Vercel Preview URL
    ];

    // Allow requests with no 'origin' (like Postman) or from allowed origins
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  credentials: true, // Allow cookies if needed
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Parse JSON request bodies
app.use(express.json());

// Root route for health check
app.get('/', (request, response) => {
  return response.status(200).send('Backend is up and running');
});

// Register routes
app.use('/events', eventsRouter);
app.use('/committeeMembers', committeeMembersRouter);
app.use('/albums', albumsRouter);
app.use('/newsletters', newslettersRouter);

// Connect to MongoDB and start the server
mongoose
  .connect(MONGODBURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to DB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
