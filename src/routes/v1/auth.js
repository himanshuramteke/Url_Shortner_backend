import express from 'express';
import { authMiddleware } from '../../middlewares/auth.middleware.js';
import { get_current_user, loginUserController, logoutUserController, registerUserController } from '../../controllers/auth.controller.js';

const router = express.Router();

router.post('/register', registerUserController);
router.post('/login', loginUserController);
router.post('/logout', logoutUserController);
router.get('/me', authMiddleware, get_current_user);

export default router;