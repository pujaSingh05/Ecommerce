import userModel from '../models/userModel.js';
import { hashpassword } from '../helper/authhelper.js';
import JWT from'jsonwebtoken';

 const RegisterController = async  (req, res) => {
    try{
        const {name, email,password, phone, address } = req.body;
        //validation
        if(!name){
            return res.send({error:'Name is required'})
        }
        if(!email){
            return res.send({error:'Email is required'})
        }
        if (!phone) {
            return res.send({ message: "Phone no. is required" });
          }
        if(!password){
            return res.send({error:'Password is required'})
        }
        if(!address){
            return res.send({error:'Address is required'})
        }

        //check user
        const existingUser = await userModel.findOne({email});
               //existing user 
               if(existingUser){
                return res.status(200).send({
                    success: true,
                    messgae:' user already exists, please login'
                })
               }

               //resgister user 
               const hashedPassword = await hashpassword(password);

               //save 
               const user = await new userModel({name, email, phone, address, password: hashedPassword}).save();

               res.status(201).send({
                success:true,
                messgae:"User registered successfully",
                user,
               })

    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            messgae:'Error in registration',
            error,
        });
    }

};

//Post Login
const LoginController = async () => {

};

export default {RegisterController, LoginController};