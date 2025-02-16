import express from 'express';
import { PORT } from "./config.js";
import usersRoutes from './routes/users.routes.js';
import morgan from 'morgan';
import cors from 'cors';


const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(usersRoutes);

const port = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${port}`);
});


