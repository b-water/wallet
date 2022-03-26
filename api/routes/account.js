import { Router } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = Router()

router.get('/account', async (req, res) => {
    const result = await prisma.account.findMany()
    res.json(result)
})

router.get('/account/:id', async (req, res) => {
    const result = await prisma.account.findFirst()
    res.json(result)
})

export default router;