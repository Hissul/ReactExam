import { prisma } from '../prisma.js'
import jwt from 'jsonwebtoken'
import { UserFields } from '../utils/userFields.js'
import asyncHandler from 'express-async-handler'


export const protect = asyncHandler(async (req, res, next) => {

	let token;

    // забераем токен из хедера
	if (req.headers.authorization?.startsWith('Bearer')) {
		token = req.headers.authorization.split(' ')[1]

        console.log(token);

        // забираем user.id из токена
		const decoded = jwt.verify(token, process.env.ACCESS_TOKEN)

		const userFound = await prisma.user.findUnique({
			where: {
				id: decoded.userId
			},
			select: UserFields
		})

		if (userFound) {
			req.user = userFound
			next()
		} else {
			res.status(401)
			throw new Error('Not authorized, token failed')
		}
	}

	if (!token) {
		res.status(401)
		throw new Error('Not authorized, I do not have a token')
	}
})