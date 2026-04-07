// MIDDLEWARES
import { Router } from 'express';

// CONTROLLERS
import {
    createUserHandler,
    findUserHandler,
    findAllUserHandler,
    updateUserHandler,
    deleteUserHandler
} from '../controllers/user.controller';

// MIDDLEWARES
// import Authorize from '../middlewares/authorization.middleware';

const userRouter = Router();
// userRouter.use(Authorize.accesstoken);

userRouter.route('/')
    .post(createUserHandler)
    .get(findAllUserHandler);
userRouter.route('/:user_id')
    .get(findUserHandler)
    .patch(updateUserHandler)
    .delete(deleteUserHandler);

export default userRouter;
