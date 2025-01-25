// backend/index.js
import dotenv from 'dotenv';
import express from "express";
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

// Allow requests from your Vercel frontend
const corsOptions = {
  origin: [
    'azkonkanis.com',
    'www.azkonkanis.com',
    'azkonkanis-psi.vercel.app',
    'azka-psi.vercel.app'
  ], // Replace with your Vercel frontend domain
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
};

app.use(cors(corsOptions));
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
