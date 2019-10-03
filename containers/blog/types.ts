export interface Article {
    date: number;
    author: string;
    link: string;
    imagePreview?: string;
    header: string;
    subheader: string;
    image?: string;
}

export type Articles = Article[];

export interface Blog extends Article {
    content: string;
}
