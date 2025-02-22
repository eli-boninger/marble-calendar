import { PrismaClient } from '@prisma/client'
import dayjs from 'dayjs'
const prisma = new PrismaClient()

const events = [
    {
        title: 'Birthday party',
        start: dayjs().add(8, 'day').hour(19).minute(0).second(0).millisecond(0).toDate(),
        end: dayjs().add(8, 'day').hour(21).minute(30).second(0).millisecond(0).toDate()
    },
    {
        title: 'Visiting Family',
        start: dayjs().add(1, 'month').hour(0).minute(0).second(0).millisecond(0).toDate(),
        end: dayjs().add(1, 'month').add(3, 'day').hour(0).minute(0).second(0).millisecond(0).toDate()
    }
]

async function main() {
    await prisma.event.deleteMany();

    await prisma.event.createMany({
        data: events,
        skipDuplicates: true
    })
}

main().then(async () => {
    await prisma.$disconnect()
}).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
})