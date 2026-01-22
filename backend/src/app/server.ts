import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import helloRoutes from '../routes/HelloRoutes.js';
import usersRoutes from '../routes/UsersRoutes.js';

const app = express();

app.use(cors({
  origin: process.env.FRONT_URL
}));

app.use(express.json());
app.use('/api', helloRoutes);
app.use('/api', usersRoutes)

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});