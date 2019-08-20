export interface Article {
  title: string;
  image: string;
  id: number;
  content: string;
  category: ArticleCategory;
  tags: string[];
  date: number;
}

export interface ArticleCategory {
  id: number;
  name: string;
}
