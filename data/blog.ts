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

export const MOCK_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "How to Building Modern Next.js Applications",
    description:
      "Explore Next.js 14 features, including Server Components, App Router, and best practices for core concepts.",
    coverImage: "/images/blog/blog-1.png",
    tags: ["Next.js", "React", "TypeScript"],
    readingTime: 8,
    publishDate: "2024-03-20",
    status: "published",
  },
  {
    id: "2",
    title: "Advanced TypeScript Type Programming",
    description:
      "Deep dive into TypeScript's type system and master core techniques in type programming.",
    coverImage: "/images/blog/blog-2.png",
    tags: ["TypeScript", "Programming"],
    readingTime: 12,
    publishDate: "2024-03-18",
    status: "draft",
  },
];
