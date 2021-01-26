/**
 *
 */
import { Request, Response ,Router } from 'express';
import controller from '../controller';
import response from '../../../network/response';

const router = Router();

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

export default router;
