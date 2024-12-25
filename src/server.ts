import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import connectDB from './db/db';
import userRoutes from './routes/userRoutes';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', userRoutes);

// Handling unhandled routes
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Route not found' });
});

// Middleware for error handling
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: 'Internal Server Error',
    message: err.message,
  });
});

const PORT = process.env.PORT || 3000;

export { PORT, app };
