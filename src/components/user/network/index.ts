/**
 *
 */
import { Request, Response ,Router } from 'express';
import controller from '../controller';
import response from '../../../network/response';

const router = Router();

// Add a user
router.post('/', async (req: Request, res: Response): Promise<void> => {
  const user = req.body;
  user.registerDate = new Date();
  try {
    const addUser = await controller.addUser(user);
    response.sucessUser(req, res, 201, addUser);
  } catch (error) {
    response.error(req, res, 500, 'Internal Error', error);
  }
});

// Get all uses
router.get('/', async (req: Request, res: Response) => {
  try {
    const users = await controller.getAllUsers();
    response.sucessUsers(req, res, 200, users);
  } catch (error) {
    response.error(req, res, 500, 'Internal error', error);
  }
});

export default router;
