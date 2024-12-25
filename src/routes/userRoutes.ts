import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = Router();

// Define the GET route to retrieve users
router.get('/users', UserController.getUsers);

export default router;
