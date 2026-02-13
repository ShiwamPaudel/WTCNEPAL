/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://wtcnepal.com',
    generateRobotsTxt: true,
    exclude: ['/server-sitemap.xml'], // exclude dynamic sitemap if we add one later
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
    },
}
