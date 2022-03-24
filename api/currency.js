import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

export default {
    path: '/api',
    handler: app
}

app.get('/currency', async (req, res) => {
    const result = await prisma.transaction.findFirst()
    res.json(result)
})