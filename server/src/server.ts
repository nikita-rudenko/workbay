import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';

import noteRouter from './routes/noteRoutes';

const app = express();

require('dotenv').config({ silent: process.env.NODE_ENV === 'production' });

app.use(express.json());
app.use(cors());
app.use('/api/notes', noteRouter);

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('DB connection successful');
  });

const port = process.env.PORT || 3001;

app.listen(port, () =>
  console.log(`App is listening on port http://localhost:${port}`)
);
