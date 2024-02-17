import express from "express";
import { newUser, getAllUser, getUser, deleteUser } from "../controllers/user.js";
const app = express.Router();
// rroute - /api/v1/user/new
app.post("/new", newUser);
//to get all user
app.get("/all", getAllUser);
// // /api/v1/user/dynaminID
// app.get("/:id", getUser);
// chaining
app.route("/:id").get(getUser).delete(deleteUser);
export default app;
