import React from 'react';
import { NextSeo, ArticleJsonLd, BreadcrumbJsonLd } from 'next-seo';
import Head from 'next/head';

interface MetaProps {
    title?: string;
    description?: string;
    keywords?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    ogUrl?: string;
    canonical?: string;
    robots?: string;
    schema?: any;
    breadcrumbs?: { name: string; item: string }[];
}

const Meta: React.FC<MetaProps> = ({
    title = "Web Trading Concern Pvt. Ltd. | Best Medical Equipment Service Provider & Supplier in Nepal",
    description = "Web Trading Concern (WTC) Nepal is a leading distributor of medical, hospital, and laboratory equipment in Nepal.",
    keywords = "Medical Equipment Nepal, Hospital Equipment Supplier Nepal, Laboratory Equipment Nepal, Biochemistry Analyzer Nepal, Hematology Analyzer Nepal, Medical Equipment Service Nepal",
    ogTitle,
    ogDescription,
    ogImage = "/assets/logo.png", // Default logo
    ogUrl = "https://wtcnepal.com",
    canonical,
    robots = "index, follow",
    schema,
    breadcrumbs
}) => {
    const fullTitle = title.includes("WTC") ? title : `${title} | WTC Nepal`;
    const resolvedOgImage = ogImage.startsWith('/') ? `https://wtcnepal.com${ogImage}` : ogImage;

    return (
        <>
            <NextSeo
                title={fullTitle}
                description={description}
                canonical={canonical || ogUrl}
                openGraph={{
                    url: ogUrl,
                    title: ogTitle || fullTitle,
                    description: ogDescription || description,
                    images: [
                        {
                            url: resolvedOgImage,
                            alt: fullTitle,
                        },
                    ],
                    site_name: 'Web Trading Concern Pvt. Ltd., Nepal',
                }}
                twitter={{
                    handle: '@wtcnepal',
                    site: '@wtcnepal',
                    cardType: 'summary_large_image',
                }}
                additionalMetaTags={[
                    {
                        name: 'keywords',
                        content: keywords,
                    },
                    {
                        name: 'robots',
                        content: robots,
                    }
                ]}
            />
            {breadcrumbs && (
                <BreadcrumbJsonLd
                    itemListElements={breadcrumbs.map((crumb, index) => ({
                        position: index + 1,
                        name: crumb.name,
                        item: crumb.item,
                    }))}
                />
            )}
            {/* Custom Schema Injection if needed */}
            {schema && (
                <Head>
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                    />
                </Head>
            )}
            {/* General Favicon */}
            <Head>
                <link rel="icon" href="/assets/favicon.png" />
            </Head>
        </>
    );
};

export default Meta;
