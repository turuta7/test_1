import { Request, Response } from 'express';
import User from '../db/models/User';

class UserController {
  // Get users with optional sorting by level
  public async getUsers(req: Request, res: Response): Promise<void> {
    try {
      const { level } = req.query;

      // Sorting by the level field in descending or ascending order.
      const sort: { level: 1 | -1 } =
        level === '1' ? { level: 1 } : { level: -1 };

      // Fetch users from the database and sort by level
      const users = await User.find().sort(sort);
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving users' });
    }
  }
}

export default new UserController();
