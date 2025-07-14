import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import eventsRoute from './routes/events.js';
import albumsRoute from './routes/albums.js';
import newslettersRoute from './routes/newsletters.js';
import committeeMembersRoute from './routes/committeeMembers.js';
import authRoutes from './routes/users.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json({ limit: '50mb' }));
app.use(cors());

// Your API routes remain the same
app.use('/api/events', eventsRoute);
app.use('/api/albums', albumsRoute);
app.use('/api/newsletters', newslettersRoute);
app.use('/api/committeeMembers', committeeMembersRoute);
app.use('/api/auth', authRoutes);

// Database Connection remains the same
mongoose
  .connect(process.env.MONGODBURL)
  .then(() => {
    console.log('App connected to database');
  })
  .catch((error) => {
    console.log(error);
  });

if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5555;
  app.listen(PORT, () => {
    console.log(`Server is running for local development on port: ${PORT}`);
  });
}

export default app;