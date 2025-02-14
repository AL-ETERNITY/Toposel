import express from 'express';
import { loginUser, registerUser, searchUser} from '../controllers/userController.js';
import authUser from '../middleware/auth.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/search', authUser, searchUser)

export default userRouter;