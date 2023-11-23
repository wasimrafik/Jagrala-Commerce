import express from "express";
import {
  getUser,
  addUser,
  updateUser,
  deleteUser,
  signUP,
  logIn,
  // OTPLogin,
  // generateOTP,
} from "../Controllers/user.controllers";

const userRouter = express.Router();

console.log("ppppppp");

userRouter.get("/getUser", getUser);
userRouter.post("/addUser", addUser);
userRouter.put("/updateUser/:user_id", updateUser);
userRouter.delete("/deleteUser/:user_id", deleteUser);
userRouter.post("/signUp", signUP);
userRouter.post("/logIn", logIn);
// userRouter.get("/OTPLogin", OTPLogin);
// userRouter.patch("/generateOTP", generateOTP);

export default userRouter;
