// backend/index.js
import dotenv from 'dotenv';
import express from "express";
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5555;
const MONGODBURL = process.env.MONGODBURL


app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('INIT ')
})




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

