import express from 'express';
import cors from 'cors';
import helloRoutes from '../routes/HelloRoutes.js';
import 'dotenv/config';

const app = express();

app.use(cors({
  origin: process.env.FRONT_URL
}));

app.use('/api', helloRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});

import { pool } from "../common-lib/config/database.js";

async function testDb() {
  try {
    const result = await pool.query("SELECT NOW()");
    console.log("Connexion Neon OK");
  } catch (err) {
    console.error("Erreur :", err);
  }
}

testDb();
