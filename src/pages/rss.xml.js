import { getCollection } from "astro:content";


export async function GET(context) {
    const posts = await getCollection('posts')
    return rss({
        title: 'El Blog de Gustosín',
        description: 'Mi vida felina de amor y ronroneos',
        site: context.site,
        items: posts.map(posts => ({
            title: posts.data.title,
            pubDate: posts.data.pubDate,
            description: posts.data.description,
            link: `/posts/${posts.slug}/`,
        })),
        customData: `<language>es-ES</language>`
    });
}
