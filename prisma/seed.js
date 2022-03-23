const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
    await prisma.currency.create({
        data: {
            name: 'EUR'
        },
    });
    await prisma.currency.create({
        data: {
            name: 'USD'
        },
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