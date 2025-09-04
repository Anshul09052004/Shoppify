import multer from 'multer';
import AppError from '../Utils/error.utils.js';

const storage = multer.memoryStorage(); // diskStorage → memoryStorage

const upload = multer({
    storage,
    limits: {
        fileSize: 1024 * 1024 * 50 // 50MB
    },
    fileFilter: (req, file, cb) => {
        const ext = file.originalname.split('.').pop().toLowerCase();
        if (!['jpg', 'jpeg', 'png'].includes(ext)) {
            return cb(new AppError('Only .jpg, .jpeg, and .png files are allowed', 400), false);
        }
        cb(null, true);
    }
});

export default upload;
