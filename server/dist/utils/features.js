import mongoose from "mongoose";
export const connectDb = () => {
    mongoose.connect("mongodb+srv://job_portal:portal1@cluster0.wt4erka.mongodb.net/", {
        dbName: "shop_now"
    }).then((c) => console.log(`DB Connected to ${c.connection.host}`)).catch(e => console.log(e));
};
