import { prisma } from '$lib/functions/prismaInstance'

export async function get() {
    try {
        const news = await prisma.$queryRaw`SELECT *, unix_timestamp(str_to_date(date, '%d.%m.%Y')) as ts FROM news WHERE lang='ru-RU' ORDER BY ts DESC, id DESC LIMIT 5`
        const pinned = await prisma.$queryRaw`SELECT news.*, carousel.news_id as news_id FROM news RIGHT JOIN carousel ON news.id = carousel.news_id WHERE news_id IN (SELECT news_id FROM carousel) and IF(news.id IS NULL, 0, 1) = 1 and news.lang='ru-RU' LIMIT 1`
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
                pinned,
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