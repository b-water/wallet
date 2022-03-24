import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

export default {
    path: '/api',
    handler: app
}

app.post(`/transaction`, async (req, res) => {
    const result = await prisma.transaction.create({
        data: {
            type: req.body.type,
            name: req.body.name,
            value: req.body.value
        },
    })
    res.json(result)
})

app.post('/transaction', async (req, res) => {
    const { type, name, value } = req.body
    const transaction = await prisma.transaction.create({
        data: {
            type,
            name,
            value
        }
    })
    res.status(200).json(transaction)
})

app.get('/transactions', async (req, res) => {
    const result = await prisma.transaction.findFirst()
    res.json(result)
})