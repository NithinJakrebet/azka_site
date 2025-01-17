// backend/index.js
import dotenv from 'dotenv';
import express from "express";
import mongoose from 'mongoose';
import eventsRouter from './routes/events.js';
import committeeMembersRouter from './routes/committeeMembers.js';
import albumsRouter from './routes/albums.js';
import newslettersRouter from './routes/newsletters.js'
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const MONGODBURL = process.env.MONGODBURL

app.use(express.json());
app.use(cors())

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('INIT ')
})

// Use the events router with base path /events
app.use('/events', eventsRouter);
app.use('/committeeMembers', committeeMembersRouter);
app.use('/albums', albumsRouter);
app.use('/newsletters', newslettersRouter);

mongoose
  .connect(MONGODBURL)

  .then(() => {
    console.log(`Connected to DB`)

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })

  .catch((error) => {
    console.log(error);
  })

