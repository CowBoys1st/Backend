import { Router }  from "express";
import { createUser, getUser, getUserId } from "../controllers/user.controllers";

const userRouter = Router()

userRouter.get('/', getUser)
userRouter.get('/:id', getUserId)
userRouter.post('/', createUser)

export {userRouter}