interface Image {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string;
  width: number;
  height: number;
  url: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Author {
  id: number;
  documentId: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Category {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface RichTextBlock {
  __component: "shared.rich-text";
  id: number;
  body: string;
}

interface QuoteBlock {
  __component: "shared.quote";
  id: number;
  title: string;
  body: string;
}

interface MediaBlock {
  __component: "shared.media";
  id: number;
}

interface SliderBlock {
  __component: "shared.slider";
  id: number;
}

type Block = RichTextBlock | QuoteBlock | MediaBlock | SliderBlock;

export interface Article {
  id: number;
  documentId: string;
  title: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cover: Image;
  author: Author;
  category: Category;
  blocks: Block[];
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface ArticlesResponse {
  data: Article[];
  meta: {
    pagination: Pagination;
  };
}