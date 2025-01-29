import express from 'express';
import { Album } from '../models/albumModel.js';

const router = express.Router();

// READ
router.get('/', async (request, response) => {
  try {
    const albums = await Album.find({});

    return response.status(200).json(albums); 
     
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message })
  }
})

// READ BY ID
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const album = await Album.findById(id);

    return response.status(200).json(album); 
     
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message })
  }
})


// CREATE
router.post('/', async (request, response) => {
  try {
    const {
            title,
            images,
            link
      } = request.body;

    // Validate required fields
    const missingFields = [];
    if (!title) missingFields.push('title');
    if (!images) missingFields.push('images');

    // If there are missing fields, return an error message
    if (missingFields.length > 0) {
      return response.status(400).send({
        message: `Missing required fields: ${missingFields.join(', ')}`,
      });
    }

    const newAlbum = {
      title,
      images: images || null,
      link
    };

    const album = await Album.create(newAlbum);

    return response.status(201).send(album);
  } catch (error) {
    console.error(error.message);
    response.status(500).send({ message: error.message });
  }
});


// UPDATE
router.put('/:id', async (request, response) => {
  try {
      const {
            title,
            images,
            link
      } = request.body;

    // Validate required fields
    const missingFields = [];
    if (!title) missingFields.push('title');
    if (!images) missingFields.push('images');

    // If there are missing fields, return an error message
    if (missingFields.length > 0) {
      return response.status(400).send({
        message: `Missing required fields: ${missingFields.join(', ')}`,
      });
    }

    const { id } = request.params;

    const result = await Album.findByIdAndUpdate(
      id,
      request.body,
      { new: true, runValidators: true }
    );

    if (!result) {
      return response.status(404).json({ message: 'Album not found' });
    }

    return response.status(200).send({ message: 'Album updated successfully', updatedAlbum: result });
  } catch (error) {
    console.error(error.message);
    response.status(500).send({ message: error.message });
  }
});


// DELETE
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Album.findByIdAndDelete(id);

    if (!result) return response.status(404).send({ message: 'Album not found' });

    return response.status(200).send({ message: 'Album successfully deleted' });

  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Export the router
export default router;
