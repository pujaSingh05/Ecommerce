import express from 'express';
import authController, {RegisterController, LoginController, TestController} from '../controller/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

//router object
const router = express.Router();

//routing
//register || 
router.post('/register', RegisterController);

//login
router.post('/login',authController, LoginController);

//test
router.get('/test', requireSignIn, isAdmin, TestController )

export default router;