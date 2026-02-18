
export const slugify = (text: string): string => {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
};

export const createProductSlug = (title: string, id: number | string): string => {
    return `${slugify(title)}-${id}`;
};

export const extractIdFromSlug = (slug: string): string => {
    const parts = slug.split('-');
    return parts[parts.length - 1]; // The ID is always the last part
};
