// routes/events.js
import express from 'express';
import { CommitteeMember } from '../models/committeeMemberModel.js';

const router = express.Router();

// READ
router.get('/', async (request, response) => {
  try {
    const committeeMembers = await CommitteeMember.find({});

    return response.status(200).json(committeeMembers); 
     
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message })
  }
})

// READ BY ID
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const committeeMember = await CommitteeMember.findById(id);

    return response.status(200).json(committeeMember); 
     
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message })
  }
})


// CREATE
router.post('/', async (request, response) => {
  try {
    const {
      name,
      bio,
      imageUrl
      } = request.body;

    // Validate required fields
    const missingFields = [];
    if (!name) missingFields.push('name');
    if (!bio) missingFields.push('bio');
    if (!imageUrl) missingFields.push('imageUrl');

    // If there are missing fields, return an error message
    if (missingFields.length > 0) {
      return response.status(400).send({
        message: `Missing required fields: ${missingFields.join(', ')}`,
      });
    }

    // Create new event
    const newCommitteeMember = {
      name,
      bio,
      imageUrl
    };

    const committeeMember = await CommitteeMember.create(newCommitteeMember);

    return response.status(201).send(committeeMember);
  } catch (error) {
    console.error(error.message);
    response.status(500).send({ message: error.message });
  }
});


// UPDATE
router.put('/:id', async (request, response) => {
  try {
    const { 
      name,
      bio,
      imageUrl 
      } = request.body;

    // Collect missing fields
    const missingFields = [];
    if (!name) missingFields.push('name');
    if (!bio) missingFields.push('bio');
    if (!imageUrl) missingFields.push('imageUrl');

    // If there are missing fields, return an error message
    if (missingFields.length > 0) {
      return response.status(400).send({
        message: `Missing required fields: ${missingFields.join(', ')}`,
      });
    }

    const { CommitteeMember } = request.params;

    const result = await CommitteeMember.findByIdAndUpdate(
      name,
      bio,
      imageUrl
    );

    if (!result) {
      return response.status(404).json({ message: 'Committee Member not found' });
    }

    return response.status(200).send({ message: 'Committee Member updated successfully', updatedCommitteeMember: result });
  } catch (error) {
    console.error(error.message);
    response.status(500).send({ message: error.message });
  }
});


// Export the router
export default router;
