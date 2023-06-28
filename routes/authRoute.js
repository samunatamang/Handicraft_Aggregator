import express from "express";
import {
  registerController,
  LoginController,
  testController,
 } from "../controller/authController.js";
 import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
//router object
const router = express.Router()

//routing
//REGISTER|| METHOD POST
router.post('/register', registerController)

//LOGIN || POST
router.post('/login', LoginController)

//Test || Routes
router.get('/test',requireSignIn , isAdmin, testController)

export default router