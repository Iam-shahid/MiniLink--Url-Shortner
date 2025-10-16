

import express, { Router } from "express";
import { getOriginalUrl, renderUi, urlShort } from "../controllers/user_controllers.js";

let userRouter= Router()

userRouter.get('/',renderUi)
userRouter.post('/create',urlShort)
userRouter.get('/:shortCode',getOriginalUrl)

export default userRouter
