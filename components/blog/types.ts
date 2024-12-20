export type BlogPost = {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  tags: string[];
  readingTime: number;
  publishDate: string;
  status: "draft" | "published";
};
