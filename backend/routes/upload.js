// routes/upload.js
import express from 'express';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

// Configure multer to use memory storage (files are kept in memory)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Configure Cloudinary with your credentials from the .env file
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// POST /upload
// This endpoint accepts a file (under the key "file") and uploads it to Cloudinary.
// It uses a "type" field in the form data to conditionally set the folder name.
router.post('/', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  // Retrieve the type from the request body (e.g., "album" or "committeeMembers")
  const fileType = req.body.type;
  const folderMapping = {
    album: 'albums',
    committeeMembers: 'committeeMembers',
  };

  // Determine the folder name based on the file type; default if not matched
  const folderName = folderMapping[fileType] || 'default';

  // Use Cloudinary's upload_stream to handle the file buffer
  const uploadStream = cloudinary.uploader.upload_stream(
    { folder: folderName },
    (error, result) => {
      if (error) {
        console.error('Cloudinary upload error:', error);
        return res.status(500).json({ message: 'Upload failed', error });
      }
      // Return the secure URL from Cloudinary
      res.status(200).json({ url: result.secure_url });
    }
  );

  // Pass the file buffer to Cloudinary
  uploadStream.end(req.file.buffer);
});

export default router;
