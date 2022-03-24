const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
import currencys from './seeds/currencys'

async function main() {
    currencys.forEach(async function (data) {
        await prisma.currency.create({
            data: data,
        });
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