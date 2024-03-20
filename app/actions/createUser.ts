'use server'
import bcrypt from 'bcrypt'
import client from '@app/libs/prismadb'
export const createUser = async ( FormData: FormData) => {

    const name = FormData.get('name')?.toString() || null;
    const password = FormData.get('password')?.toString() || null;
    if (name === null || password === null){
        throw new Error("Invalid credentials")
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = {
        name,
        hashedPassword
    }

    const response = await client.user.create({
        data:{
            ...user
        }
    })

    return response
};