const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const { currencys } = require('./seeds/currencys')

async function main() {
    currencys.forEach(async function (data) {
        await prisma.currency.create({
            data: data,
        });
    });
    /** 
    await prisma.currency.create({
        data: currencys,
    });*/
    /** 
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
    */
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })