import { User } from "../models/user.model.js";
import { ApiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { sendEmail } from "../utils/smtp.js";
import {ApiResponse} from "../utils/apiResponse.js"
import { sendToken } from "../utils/sendToken.js"
import crypto from "crypto";

export const signup = asyncHandler( async(req,res,next) => {

})

export const verifyUser = asyncHandler( async(req,res,next) => {
 
})

export const signin = asyncHandler( async(req,res,next) => {

})

export const signout = asyncHandler( async(req,res,next) => {

})

export const getCurrentUser = asyncHandler(async(req,res,next)=>{

})

export const changeCurrentPassword = asyncHandler(async(req,res,next) => {

})

export const updateUserDetails = asyncHandler(async(req,res,next)=>{
 
})

export const forgotPassword = asyncHandler( async(req,res,next) => {

});

export const resetPassword = asyncHandler(async (req, res, next) => {

});