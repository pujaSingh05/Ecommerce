import JWT from 'jsonwebtoken';


//Protected Routes token base
export const requireSignIn = async (req, res, next) => {
    try{
        const decode = JWT.verify(req.headers.authorization , process.env .JWT_SECRET);
        req.user = decode;
    }catch(error){
        console.log(error);
    }

};


//admin access
export const isAdmin = async (req, res, next) =>{
    try{
         const user = await userModel.findById(req.user._id)
         if(user.role !== 1){
            return res.status(401).send({
                success: true,
                message: 'Unauthorized Access'
            })
         }else{
            next();
         }
    }catch(error){
        console.log(error);
        req.status(401).send({
            success: false,
            error,
            message: 'Error in admin middleware'
        })
    }
}