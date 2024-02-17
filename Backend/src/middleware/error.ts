import { Request, Response, NextFunction} from 'express';
import ErrorHandler from '../utils/utilityClass.js';
import  {ControllerType} from '../types/types.js';

export const errorMiddleware = (
    err: ErrorHandler, 
    req: Request,
    res: Response,
    next: NextFunction
      ) =>{
        err.message ||= "Internal server error";    //p+=1

        err.statusCode ||= 500;
    return res.status(err.statusCode).json({
        success: false,
        message: "err.message",
    })

};  


//wrapper
export const TryCatch = (func  :ControllerType) => ( req: Request,
    res: Response, 
    next: NextFunction)=> {

return Promise.resolve(func(req, res, next)).catch(next);
    };

   
