import express from 'express';
import cors from 'cors';
import helloRoutes from '../routes/HelloRoutes.js';
import authRoutes from '../routes/auth.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// 🔥 IMPORTANT : pour lire req.body
app.use(express.json());

// Autoriser le front
app.use(cors({ origin: '*' }));

app.use('/api', helloRoutes);
app.use('/api/auth', authRoutes);

// Port Railway
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
