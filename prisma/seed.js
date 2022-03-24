import { PrismaClient, Prisma } from '@prisma/client'
import currencys from './seeds/currencys'

const prisma = new PrismaClient()

async function main() {
    console.log('Seeding Currencys...')
    currencys.forEach(async function (data) {
        const currency = await prisma.currency.findUnique({
            where: {
                iso: data.iso
            }
        });
        if (currency === null) {
            await prisma.currency.create({
                data: data,
            });
        }
    });
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })