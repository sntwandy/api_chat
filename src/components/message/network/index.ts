import express, { Request, Response } from 'express';
import response from '../../../network/response';
const router = express.Router();

router.get('/', (req: Request, res: Response): void => {
  if (req.query.error === 'OK') {
    response.error(req, res, 500, 'Server error');
  } else {
    response.sucess(req, res, 200);
  }
});

router.post('/', (req: Request, res: Response): void => {
  if (req.query.error === 'OK') {
    response.error(req, res, 401, 'User unauthorized, doesnt have privilegies to access.');
  } else {
    response.sucess(req, res, 201);
  }
});

module.exports = router;