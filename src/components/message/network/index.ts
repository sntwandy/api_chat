import express, { Request, Response } from 'express';
import response from '../../../network/response';
import addMessage from '../controller';

const router = express.Router();

router.get('/', (req: Request, res: Response): void => {
  if (req.query.error === 'OK') {
    response.error(req, res, 500, 'Unexpected Error', 'Server internal error');
  } else {
    response.sucess(req, res, 200, 'Success');
  }
});

router.post('/', async (req: Request, res: Response): Promise<void> => {
  const { user, message } = req.body;
  try {
    const fullMessage = await addMessage(user, message);
    response.sucessMessage(req, res, 201, fullMessage);
  } catch(error) {
    response.error(req, res, 400, 'Invalid data', 'Controller Error');
  };
});

module.exports = router;