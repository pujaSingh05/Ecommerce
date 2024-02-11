import express from "express";
import { newUser } from "../controllers/user.js";
import { resolveAny } from "dns";
// import loginController from "../controllers/user"

const app = express.Router(); 

app.get("/", (req, res)=>{
    res.send("Api working fine")

});

// rroute - /api/v1/user/new
app.post("/new", newUser);


export default app;