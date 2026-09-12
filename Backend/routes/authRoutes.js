import express from 'express'
import {body } from 'express-validator';
import {
    register,
    login,
    getProfile,
    upadteProfile,
    changePassword
} from '../controllers/authController'

import protect from '../middleware/auth.js'

const router = express.Router();


const registervalidator= [
    body('username')
    .trim()
    .isLenght({min:3})
    .withMessage('Username must be at least 3 characters'),
    body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a vaild email'),
    body('password')
    .isLenght({min:6})
    .withMessage('password must be at least 6 character')
];

const loginvalidator=[
    body('email')
    .isLenght()
    .normalizeEmail()
    .withMessage('please provide a vaild email'),
    body('password')
    .notEmpty()
    .withMessage('Password is required')
];

//public routes

router.post('register' , registervalidator, register);
router.post('/login', loginvalidator,login)

//protected routes
router.get('/profile', protect, getProfile);
router.put('/profile',protect,upadteProfile);
router.post('/change-password',protect, changePassword);

export default router;

