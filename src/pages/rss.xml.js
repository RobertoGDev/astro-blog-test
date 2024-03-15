import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
    return rss({
        title: 'El Blog de Gustosín',
        description: 'Mi vida felina de amor y ronroneos',
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>es-ES</language>`
    });
}
