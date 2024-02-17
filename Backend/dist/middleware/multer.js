import multer from 'multer';
import { v4 as uuid } from 'uuid';
// multer().single(" file")   //store in harddisk
const storage = multer.diskStorage({
    destination(req, file, callback) {
        callback(null, "uploads");
    },
    filename(req, file, callback) {
        const id = uuid();
        const extension = file.originalname.split(".").pop();
        callback(null, `${id}.${extension}`);
    },
});
export const singleUpload = multer({ storage }).single("photo");
