import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import serverless from 'serverless-http';

// FIX: Correct the filenames in the import statements
import eventsRoute from './routes/events.js';
import albumsRoute from './routes/albums.js';
import newslettersRoute from './routes/newsletters.js';
import committeeMembersRoute from './routes/committeeMembers.js';
import authRoutes from './routes/users.js'; // Assuming auth logic is in users.js

const app = express();

// Middleware
app.use(express.json({ limit: '50mb' }));
app.use(cors());

// Your API routes
app.use('/api/events', eventsRoute);
app.use('/api/albums', albumsRoute);
app.use('/api/newsletters', newslettersRoute);
app.use('/api/committeeMembers', committeeMembersRoute);
app.use('/api/auth', authRoutes);

// Database Connection
mongoose
  .connect(process.env.MONGODBURL)
  .then(() => {
    console.log('App connected to database');
  })
  .catch((error) => {
    console.log(error);
  });

export default serverless(app);