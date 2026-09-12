import jwt from 'jsonwebtoken'
import User from '../models/User.js'

//gen token 
const genrateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_SECRET
    })
};


//@desc register new user
//@route post/api/auth/register
//@access public

export const register = async (req, res , next)=>{

    try{

    }
    catch(error){
        next(error);
    }

};


//@desc login user
//@route post/api/auth/login
//@access public

export const login= async(req, res, next)=>{

}

//@desc get user profile
//@route get/api/auth/login
//@access profile

export const getProfile= async(req, res, next)=>{

}

//@desc update user profile
//@route put/api/auth/profile
//@access private

export const updateprofile= async(req, res,next)=>{

}

//@desc password
//@route post/api/auth/change-password
//@access private

export const changePassword= async(req , res,next)=>{

}



