import { prisma } from "../prisma.js"
import asyncHandler from "express-async-handler"


// @desc    Auth user
// @route   POST /api/auth/login
// @access  Public
export const authUser = asyncHandler( async (req, res) => {
    const user = await prisma.user.findMany({
        where:{
            password1: 'qwdqw'
        }
    });

    res.json(user);
})



// @desc    Register user
// @route   POST /api/auth/register
// @access  Public
export const registerUser = asyncHandler( async (req, res) => {

    const { email, password } = req.body
 
    res.json(email);
})