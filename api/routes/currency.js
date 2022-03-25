import { Router } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = Router()

router.get('/currency', async (req, res) => {
    const result = await prisma.currency.findMany()
    res.json(result)
})

router.get('/currency/:id', async (req, res) => {
    const result = await prisma.currency.findFirst()
    res.json(result)
})

export default router;