import express from 'express'
import { PrismaClient } from '@prisma/client'
import currency from './routes/currency'

const prisma = new PrismaClient()
const router = express()

export default {
    path: '/api',
    handler: router
}

router.use(express.json())
router.use(currency)

router.post(`/transaction`, async (req, res) => {
    const result = await prisma.transaction.create({
        data: {
            type: req.body.type,
            name: req.body.name,
            value: req.body.value
        },
    })
    res.json(result)
})

router.post('/transaction', async (req, res) => {
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

router.get('/transactions', async (req, res) => {
    const result = await prisma.transaction.findFirst()
    res.json(result)
})