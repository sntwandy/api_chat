/**
 *
 */
import {  Request, Response, Router } from 'express';
import response from '../../../network/response';
import controller from '../controller';

const router = Router();

router.post('/', async (req: Request, res: Response): Promise<void> => {
  const users = req.body;
  try {
    const chat = await controller.create(users);
    response.sucessChat(req, res, 201, chat);
  } catch (error) {
    response.error(req, res, 500, 'Internal Error', error);
  }
});

export default router;
