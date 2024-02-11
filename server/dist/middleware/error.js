export const errorMiddleware = (err, req, res, next) => {
    err.message || (err.message = "Internal server error"); //p+=1
    err.statusCode || (err.statusCode = 500);
    return res.status(err.statusCode).json({
        success: false,
        message: "err.message",
    });
};
//wrapper
export const TryCatch = (func) => (req, res, next) => {
    return Promise.resolve(func(req, res, next)).catch(next);
};
