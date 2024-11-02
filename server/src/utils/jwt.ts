import jwt from "jsonwebtoken"
import { User } from '@prisma/client'

export const generateAccessToken = (user: User) => {
    
    const access_token_secret =process.env.JWT_ACCESS_SECRET
    if(!access_token_secret){
        throw new TypeError('No secrets found');
    }
    return jwt.sign(
        {user},
        access_token_secret,
        { expiresIn: '15m'}
    )
}


export const generateRefreshToken =(user: User, jti: string) => {
    if(!process.env.JWT_REFRESH_SECRET){
        throw new Error('JWT_REFRESH_TOKEN is not defined')
    }

    return jwt.sign({user,jti},process.env.JWT_REFRESH_SECRET, {expiresIn:'7d',jwtid: jti})
}

export const generateTokens = (user: User, jti: string) => {
    const accessToken = generateAccessToken(user)
    const refreshToken = generateRefreshToken(user,jti)

    return { accessToken, refreshToken }
}