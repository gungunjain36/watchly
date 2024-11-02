import { User } from "@prisma/client";
import bcrypt from "bcrypt"
import { db } from '../../utils/db'



function createUserByEmailAndPassword(user: User){
    user.password = bcrypt.hashSync(user.password,10)
    return db.user.create({ data: user })
}
function getUserByEmail(email: string){
    return db.user.findUnique({where: { email }})
}


function getUserById(id: User['userId']){
    return db.user.findUnique({ where: { userId: id }})
}

function getUserByUsername(username: User['username']){
    return db.user.findUnique({where: { username }})
}


export default { getUserByEmail, getUserById, getUserByUsername,createUserByEmailAndPassword }