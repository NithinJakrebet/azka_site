import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import serverless from 'serverless-http'; // Make sure this is imported

// Import your routes
import eventsRoute from './routes/eventsRoute.js';
import albumsRoute from './routes/albumsRoute.js';
import newslettersRoute from './routes/newslettersRoute.js';
import committeeMembersRoute from './routes/committeeMembersRoute.js';
import authRoutes from './routes/authRoutes.js';

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