import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import helloRoutes from '../routes/HelloRoutes.js';
import usersRoutes from '../routes/UsersRoutes.js';
import authRoutes from '../routes/AuthRoutes.js';
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
  origin: process.env.FRONT_URL,
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

app.use('/api', helloRoutes);
app.use('/api', usersRoutes)
app.use('/api', authRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
