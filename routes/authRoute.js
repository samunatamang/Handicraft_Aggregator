import express from "express";
import {
  RegisterController,
  LoginController,
  testController,
 } from "../controllers/authController.js";
 import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
//router object
const router = express.Router()

//routing
//REGISTER|| METHOD POST
router.post('/register', RegisterController)

//LOGIN || POST
router.post('/login', LoginController)

//Test || Routes
router.get('/test',requireSignIn , isAdmin, testController)

export default router