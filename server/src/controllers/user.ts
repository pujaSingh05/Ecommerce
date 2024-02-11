import { error } from 'console';
import { NextFunction, Request, Response } from "express";
import { User } from "../models/users.js";
import { NewUserRequestBody } from "../types/user.js";

export const newUser = async(
    req: Request<{},{},NewUserRequestBody>,
    res: Response,
    next: NextFunction
    )=>{
      try {

        const { name, email, photo, gender, _id, dob } = req.body;

    //      let user = await User.findById(_id);

    //      if (user)
    //   return res.status(200).json({
    //     success: true,
    //     message: `Welcome, ${user.name}`,
    //   });

    // if (!_id || !name || !email || !photo || !gender || !dob)
    //   return next(new ErrorHandler("Please add all fields", 400));

    const user = await User.create({
      name,
      email,
      photo,
      gender,
      _id,
      dob: new Date(dob),
    });

    return res.status(200).json({
      success: true,
      message: `Welcome, ${user.name}`,
    });
  }
   catch(error){
    return res.status(200).json({
      success: false,
      message: error,
    });
  };
};



