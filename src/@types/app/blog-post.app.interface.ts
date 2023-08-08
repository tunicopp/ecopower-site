export default interface BlogPost {
    title: string
    date: string
    link: string
    photo: string
    category: string
    author: {
        name: string,
        photo: string,
    }
}