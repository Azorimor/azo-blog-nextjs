import Category from "./category";

type Article = {
  id: number,
  slug: string,
  locale: string,
  author_id: number, // TODO maybe those ids are strings (needs to be checked)
  content: string,
  created_at: Date,
  updated_at: Date,
  categories: Category[]
}

export default Article;