import { Router } from 'express';
import {
    createUserHandler,
    findUserHandler,
    findAllUserHandler,
    updateUserHandler,
    deleteUserHandler
} from '../controllers/user.controller';

const userRouter = Router();

userRouter.route('/')
    .post(createUserHandler)
    .get(findAllUserHandler);
userRouter.route('/:user_id')
    .get(findUserHandler)
    .patch(updateUserHandler)
    .delete(deleteUserHandler);

export default userRouter;
