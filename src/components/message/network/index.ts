import { Request, Response, Router } from 'express';
import response from '../../../network/response';
import controller from '../controller';

const router: Router = Router();

// get all messages
router.get('/', async (req: Request, res: Response): Promise<void> => {
  const filterMessage: any = req.query.user || null;
  try {
    const messagesList = await controller.getMessages(filterMessage);
    response.sucessMessageList(req, res, 200, messagesList);
  } catch(error) {
    response.error(req, res, 500, 'Unexpected Error', error);
  };
});

// create a message
router.post('/', async (req: Request, res: Response): Promise<void> => {
  const { user, message } = req.body;
  try {
    const fullMessage = await controller.addMessage(user, message);
    response.sucessMessage(req, res, 201, fullMessage);
  } catch(error) {
    response.error(req, res, 400, 'Invalid data', 'Controller Error');
  };
});

// update a message
router.patch('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await controller.updateMessage(req.params.id, req.body.message);
    response.sucess(req, res, 200, data);
  } catch(error) {
    response.error(req, res, 500, 'Internal Error', error);
  }
});

// delete a message
router.delete('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    await controller.deleteMessage(req.params.id);
    response.sucess(req, res, 200, `Message of the user: ${req.params.id} was deleted`)
  } catch(error) {
    console.error(error);
    response.error(req, res, 500, 'Internal Error', error);
  }
});

module.exports = router;