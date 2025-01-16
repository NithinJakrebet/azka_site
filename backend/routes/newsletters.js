import express from 'express';
import { Newsletter } from '../models/newsletterModel.js';

const router = express.Router();

// READ
router.get('/', async (request, response) => {
  try {
    const newsletters = await Newsletter.find({});

    return response.status(200).json(newsletters); 
     
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message })
  }
})

// READ BY ID
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const album = await Newsletter.findById(id);

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
            imgURL,
            pdfURL
      } = request.body;

    // Validate required fields
    const missingFields = [];
    if (!title) missingFields.push('title');
    if (!imgURL) missingFields.push('imgURL');
    if (!pdfURL) missingFields.push('pdfURL');

    // If there are missing fields, return an error message
    if (missingFields.length > 0) {
      return response.status(400).send({
        message: `Missing required fields: ${missingFields.join(', ')}`,
      });
    }

    const newNewsletter = {
      title,
      imgURL,
      pdfURL
    };

    const newsletter = await Newsletter.create(newNewsletter);

    return response.status(201).send(newsletter);
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
            imgURL,
            pdfURL
      } = request.body;

    // Validate required fields
    const missingFields = [];
    if (!title) missingFields.push('title');
    if (!imgURL) missingFields.push('imgURL');
    if (!pdfURL) missingFields.push('pdfURL');

    // If there are missing fields, return an error message
    if (missingFields.length > 0) {
      return response.status(400).send({
        message: `Missing required fields: ${missingFields.join(', ')}`,
      });
    }
    const { id } = request.params;

    const result = await Newsletter.findByIdAndUpdate(
      id,
      request.body,
      { new: true, runValidators: true }
    );

    if (!result) {
      return response.status(404).json({ message: 'Newsletter not found' });
    }

    return response.status(200).send({ message: 'Newsletter updated successfully', updatedNewsletter: result });
  } catch (error) {
    console.error(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Export the router
export default router;
