export type Categories = 'hello world' | 'yara'

export type Post = {
    title: string
    slug: string
    description: string
    date: string
    categories: Categories[]
    published: boolean
}
