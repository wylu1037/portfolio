"use client";

import { motion } from "framer-motion";
import Wrapper from "@/components/shared/Wrapper";
import Container from "@/components/shared/Container";
import { Clock, Eye, Calendar } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

type BlogPost = {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  tags: string[];
  readingTime: number;
  publishDate: string;
  status: "draft" | "published";
};

const MOCK_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "How to Building Modern Next.js Applications",
    description:
      "Explore Next.js 14 features, including Server Components, App Router, and best practices for core concepts.",
    coverImage: "/images/blog/blog-1.jpeg",
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
    coverImage: "/images/blog/blog-2.jpeg",
    tags: ["TypeScript", "Programming"],
    readingTime: 12,
    publishDate: "2024-03-18",
    status: "draft",
  },
];

export default function Blog() {
  return (
    <Wrapper className="mt-28 min-h-screen bg-transparent">
      <Container>
        <div className="space-y-12">
          {/* 页面标题 */}
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight">Blog Posts</h1>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Sharing technical insights, experiences, and best practices
            </p>
          </div>

          {/* 施工提示 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-4 text-center backdrop-blur-xs"
          >
            <p className="text-yellow-500">
              🚧 Blog is under construction, more content coming soon!
            </p>
          </motion.div>

          {/* 博客列表 */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {MOCK_POSTS.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-xs transition-all hover:bg-card"
              >
                {/* 状态标识 */}
                {post.status === "draft" && (
                  <div className="absolute right-4 top-4 z-30 rounded-full bg-yellow-500/20 px-3 py-1 text-xs font-medium text-yellow-500 ring-1 ring-yellow-500/30">
                    Draft
                  </div>
                )}

                {/* 封面图片 */}
                <div className="relative aspect-2/1 overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    priority
                    className="object-cover transition-all duration-500 will-change-transform group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent opacity-80" />
                </div>

                {/* 内容区域 */}
                <div className="relative space-y-4 p-6">
                  {/* 标签 */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge variant="outline" key={tag}>
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* 标题和描述 */}
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold tracking-tight transition-colors group-hover:text-primary">
                      {post.title}
                    </h2>
                    <p className="line-clamp-2 text-sm text-muted-foreground">
                      {post.description}
                    </p>
                  </div>

                  {/* 元信息 */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      <time dateTime={post.publishDate}>
                        {post.publishDate}
                      </time>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{post.readingTime} min read</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}
