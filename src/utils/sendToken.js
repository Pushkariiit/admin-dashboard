import { User } from "../models/user.model.js";
import { ApiResponse } from "./apiResponse.js";

export const sendToken = async (user, statusCode, res, message) => {
  const accessToken = user.generateAccessToken();

  // Save user after generating the token (if needed)
  await user.save({ validateBeforeSave: false });

  // Set cookie options for better security
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,   // To make the cookie inaccessible to JavaScript
    secure: process.env.NODE_ENV === 'production', // Set to true only in production (HTTPS)
  };

  const loggedInUser = await User.findById(user._id).select('-password'); // Exclude password from the response

  return res
    .status(statusCode)
    .cookie("bargenix_accessToken", accessToken, options)  // Set cookie in response
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,  // Don't send the password or other sensitive info
          accessToken,         // Send the access token in the response
        },
        message
      )
    );
};