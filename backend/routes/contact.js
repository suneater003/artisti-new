import { Router } from 'express';
import Contact from '../models/Contact.js'; 

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
        requiredFields: {
          name: !name,
          email: !email,
          message: !message
        }
      });
    }

    // Create and save contact
    const contact = new Contact({
      name,
      email,
      message,
      status: 'unread'
      // createdAt is auto-added by the schema
    });

    const savedContact = await contact.save();

    return res.status(201).json({
      success: true,
      data: {
        id: savedContact._id,
        name: savedContact.name,
        email: savedContact.email,
        createdAt: savedContact.createdAt
      }
    });

  } catch (err) {
    console.error('[CONTACT ERROR]', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to process contact form',
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
});

export default router;