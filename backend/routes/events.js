// routes/events.js
import express from 'express';
import { Event } from '../models/eventModel.js';

const router = express.Router();

// READ
router.get('/', async (request, response) => {
  try {
    const events = await Event.find({});

    return response.status(200).json({
      count: events.length,
      data: events
    }); 
     
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message })
  }
})

// READ BY ID
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const event = await Event.findById(id);

    return response.status(200).json(event); 
     
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
            date, 
            startTime, 
            endTime, 
            location, 
            description 
      } = request.body;

    // Validate required fields
    const missingFields = [];
    if (!title) missingFields.push('title');
    if (!date) missingFields.push('date');
    if (!location) missingFields.push('location');
    if (!description) missingFields.push('description');

    // If there are missing fields, return an error message
    if (missingFields.length > 0) {
      return response.status(400).send({
        message: `Missing required fields: ${missingFields.join(', ')}`,
      });
    }

    // Create new event
    const newEvent = {
      title,
      date,
      startTime: startTime || null,
      endTime: endTime || null,
      location,
      description,
    };

    const event = await Event.create(newEvent);

    return response.status(201).send(event);
  } catch (error) {
    console.error(error.message);
    response.status(500).send({ message: error.message });
  }
});


// UPDATE
router.put('/:id', async (request, response) => {
  try {
    const { title, date, location, description } = request.body;

    // Collect missing fields
    const missingFields = [];
    if (!title) missingFields.push('title');
    if (!date) missingFields.push('date');
    if (!location) missingFields.push('location');
    if (!description) missingFields.push('description');

    // If there are missing fields, return an error message
    if (missingFields.length > 0) {
      return response.status(400).send({
        message: `Missing required fields: ${missingFields.join(', ')}`,
      });
    }

    const { id } = request.params;

    const result = await Event.findByIdAndUpdate(
      id,
      request.body,
      { new: true, runValidators: true }
    );

    if (!result) {
      return response.status(404).json({ message: 'Event not found' });
    }

    return response.status(200).send({ message: 'Event updated successfully', updatedEvent: result });
  } catch (error) {
    console.error(error.message);
    response.status(500).send({ message: error.message });
  }
});




// Export the router
export default router;
