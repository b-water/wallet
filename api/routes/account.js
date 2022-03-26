import { Router } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = Router()

router.get('/account', async (req, res) => {
    const result = await prisma.account.findMany()
    res.json(result)
})

router.get('/account/:id', async (req, res) => {
    const result = await prisma.account.findUnique({
        where: { id: parseInt(req.params.id) }
    })
    res.json(result)
})

router.post('/account', async (req, res) => {
    const result = await prisma.account.create({
        data: {
            name: req.body.name,
            currencyId: req.body.currencyId
        },
    })
    res.json(result)
})

export default router;