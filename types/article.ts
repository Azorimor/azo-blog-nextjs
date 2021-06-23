import Author from "./author";
import Category from "./category";

interface Article {
  id: number,
  slug: string,
  title: string,
  locale: string,
  author: Author, // TODO maybe those ids are strings (needs to be checked)
  content: string,
  created_at: Date,
  updated_at: Date,
  categories: Category[]
}

export default Article;