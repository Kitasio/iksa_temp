import { prisma } from '$lib/functions/prismaInstance'

export async function get() {
    try {
        const news = await prisma.$queryRaw`SELECT *, unix_timestamp(str_to_date(date, '%d.%m.%Y')) as ts FROM news WHERE lang='ru-RU' ORDER BY ts DESC, id DESC LIMIT 6`
        const books = await prisma.book.findMany({
            orderBy: [
                { year: 'desc' },
                { date_insert: 'desc'},
                { id: 'desc' }
            ],
            take: 4
        })
        return {
            status: 200,
            body: {
                news,
                books,
            },
        }
    } catch (error) {
        console.log(error)
    }
    return {
        status: 400,
    }
}