import ApiAuthor from "@/@types/api/author.api.interface";

export default interface ApiBlogPost {
    id: number,
    date: string,
    date_gmt: string,
    guid: {
        rendered: string,
    },
    modified: string,
    modified_gmt: string,
    slug: string,
    status: string,
    type: string,
    link: string,
    title: {
        rendered: string,
    },
    content: {
        rendered: string,
        protected: boolean,
    },
    excerpt: {
        rendered: string,
        protected: boolean,
    },
    author: number,
    featured_media: number,
    comment_status: string,
    ping_status: string,
    sticky: boolean,
    template: string,
    format: string,
    meta: any[],
    categories: number[],
    tags: number[],
    _links: {
        self: { href: string }[],
        collection: { href: string }[],
        about: { href: string }[],
        author: { embeddable: boolean, href: string }[],
        replies: { embeddable: boolean, href: string }[],
        version_history: { count: number, href: string }[],
        predecessor_version: { id: number, href: string }[],
        wp_featuredmedia: { embeddable: boolean, href: string }[],
        wp_attachment: { href: string }[],
        wp_term: { taxonomy: string, embeddable: boolean, href: string }[],
        curies: { name: string, href: string, templated: boolean }[],
    },
    _embedded: {
        author: ApiAuthor[]
        "wp:featuredmedia": IFeaturedMedia[]
    }
}