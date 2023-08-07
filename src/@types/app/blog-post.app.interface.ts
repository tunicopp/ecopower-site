export default interface BlogPost {
    title: string
    date: string
    link: string
    photo: string,
    author: {
        name: string,
        photo: string,
    }
}