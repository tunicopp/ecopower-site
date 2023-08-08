interface IMediaDimension {
    file: string,
    width: number,
    height: number,
    filesize?: number,
    mime_type: string,
    source_url: string
}

interface IImageMeta {
    aperture: string,
    credit: string,
    camera: string,
    caption: string,
    created_timestamp: string,
    copyright: string,
    focal_length: string,
    iso: string,
    shutter_speed: string,
    title: string,
    orientation: string,
    keywords: string[]
}

interface IMediaDetails {
    width: number,
    height: number,
    file: string,
    filesize: number,
    sizes: {
        medium: IMediaDimension,
        large: IMediaDimension,
        thumbnail: IMediaDimension,
        medium_large: IMediaDimension,
        "1536x1536": IMediaDimension,
        "annusa-post-thumb-small": IMediaDimension,
        full: IMediaDimension,
    },
    image_meta: IImageMeta
}

interface IFeaturedMedia {
    id: number,
    date: string,
    slug: string,
    type: string,
    link: string,
    title: {
        rendered: string,
    },
    author: number,
    caption: {
        rendered: string,
    },
    alt_text: string,
    media_type: string,
    mime_type: string,
    media_details: IMediaDetails,
    source_url: string,
    _links: {
        self: { href: string }[],
        collection: { href: string }[],
        about: { href: string }[],
        author: { embeddable: boolean, href: string }[],
        replies: { embeddable: boolean, href: string }[],
    }
}