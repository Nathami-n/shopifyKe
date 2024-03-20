'use server'
import prisma from '@app/libs/prismadb'
import bcrypt from 'bcrypt'

interface User {
    name: string
    hashedPassword: string
}

export const createUser = async (
    FormData: FormData

    ) => {
    const name = FormData.get('name');

    const password = FormData.get('password');
    const hashedPassword = bcrypt.hash(password, 12);
    const user: User = {
        name,
        hashedPassword
    }
    const data = await prisma.user.create({
        data:{
            ...user
        }
    })

    return data
}