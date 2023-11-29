export type Categories = 'hello world' | 'yara' | 'YARA' | 'YARA-x' | 'software engineering'

export type Post = {
    title: string
    slug: string
    description: string
    date: string
    categories: Categories[]
    published: boolean
}
