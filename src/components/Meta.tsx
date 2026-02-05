import Head from 'next/head';
import React from 'react';

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

    const breadcrumbSchema = breadcrumbs ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.name,
            "item": crumb.item
        }))
    } : null;

    const finalSchemas = [schema, breadcrumbSchema].filter(Boolean);

    return (
        <Head>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="robots" content={robots} />
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={ogUrl} />
            <meta property="og:title" content={ogTitle || fullTitle} />
            <meta property="og:description" content={ogDescription || description} />
            <meta property="og:image" content={ogImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={ogUrl} />
            <meta property="twitter:title" content={ogTitle || fullTitle} />
            <meta property="twitter:description" content={ogDescription || description} />
            <meta property="twitter:image" content={ogImage} />

            {/* Favicon */}
            <link rel="icon" href="/assets/favicon.png" />

            {/* JSON-LD Schema */}
            {finalSchemas.map((s, i) => (
                <script
                    key={i}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
                />
            ))}
        </Head>
    );
};

export default Meta;
