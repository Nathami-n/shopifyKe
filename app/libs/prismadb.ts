import { PrismaClient } from "@prisma/client";


declare global {
    var client: PrismaClient | undefined
}

//check whether the client is defined and if not declares a new client
const client = globalThis.client || new PrismaClient()

if( process.env.NODE_ENV !== 'production') {
    globalThis.client = client;
}