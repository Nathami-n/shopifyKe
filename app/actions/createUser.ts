'use server'
import prisma from '@app/libs/prismadb'
import bcrypt from 'bcrypt'
import { User } from '@prisma/client'



export const createUser = async (FormData: FormData) => {
    const name = FormData.get('name');
    const password = FormData.get('password');
    const hashedPassword =  bcrypt.hash(password, 10);
    const user: User = {
        name: name as string 
        hashedPassword: hashedPassword as string,
    }
    const data = await prisma.user.create({
        data:{
            user
        }
    })

}