import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = new Router();

router.get('/', UserController.getAllUsers);
router.post('/', UserController.addUser);

export default router;