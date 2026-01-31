import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import usersRoutes from '../routes/UsersRoutes.js';
import authRoutes from '../routes/AuthRoutes.js';
import cookieParser from "cookie-parser";
import errorHandler from '../common-lib/errors/ErrorHandler.js';
import AppError from '../common-lib/errors/AppError.js';
import huntsRoutes from '../routes/HuntRoutes.js';

const app = express();

app.use(cors({
  origin: process.env.FRONT_URL,
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

app.use('/api', usersRoutes)
app.use('/api', authRoutes);
app.use('/api', huntsRoutes)

// Toutes les autres routes non définies
app.use((req, res, next) => {
  next(new AppError({
    userMessage: 'Route non trouvée',
    statusCode: 404,
  }));
});

app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
