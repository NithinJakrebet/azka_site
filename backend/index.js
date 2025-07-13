import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import serverless from 'serverless-http'; // Import serverless-http

// Import your routes
import eventsRouter from './routes/events.js';
import committeeMembersRouter from './routes/committeeMembers.js';
import albumsRouter from './routes/albums.js';
import newslettersRouter from './routes/newsletters.js';
import usersRouter from './routes/users.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODBURL = process.env.MONGODBURL;

// Setup CORS
const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = [
      'http://localhost:3000',
      'https://azkonkanis.com',
      'https://www.azkonkanis.com',
      'https://azkonkanis-psi.vercel.app',
      'https://azka-psi.vercel.app',
    ];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};
app.use(cors(corsOptions));

// Parse JSON bodies
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.status(200).send('Backend is up and running');
});

// Register routes
app.use('/events', eventsRouter);
app.use('/committeeMembers', committeeMembersRouter);
app.use('/albums', albumsRouter);
app.use('/newsletters', newslettersRouter);
app.use('/users', usersRouter);

let handler; // Declare handler outside the connect block

// Connect to Mongo and start server
mongoose
  .connect(MONGODBURL)
  .then(() => {
    console.log('Connected to DB');
    // Wrap the express app with serverless-http here
    handler = serverless(app);
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Export the handler function for Vercel
export { handler };