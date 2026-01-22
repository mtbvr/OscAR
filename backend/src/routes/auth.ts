import express from 'express';
import { sendResetCode } from '../services/mail.services.js';

const router = express.Router();

router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email manquant' });
  }

  const code = Math.floor(100000 + Math.random() * 900000).toString();

  await sendResetCode(email, code);

  res.json({ success: true });
});

export default router;
