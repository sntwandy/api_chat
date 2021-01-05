import { Request, Response, Router } from 'express';
import response from '../../../network/response';
import controller from '../controller';

const router: Router = Router();

router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const messagesList = await controller.getMessages();
    response.sucessMessageList(req, res, 200, messagesList);
  } catch(error) {
    response.error(req, res, 500, 'Unexpected Error', error);
  };
});

router.post('/', async (req: Request, res: Response): Promise<void> => {
  const { user, message } = req.body;
  try {
    const fullMessage = await controller.addMessage(user, message);
    response.sucessMessage(req, res, 201, fullMessage);
  } catch(error) {
    response.error(req, res, 400, 'Invalid data', 'Controller Error');
  };
});

module.exports = router;