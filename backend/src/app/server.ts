import express from 'express';
import cors from 'cors';
import helloRoutes from '../routes/HelloRoutes.js';

const app = express();

// Autoriser le front Vercel
app.use(cors({
  origin: 'http://localhost:3000' //https://oscar-deploiement.vercel.app
}));

app.use('/api', helloRoutes);

// Utiliser le port fourni par Railway
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
