"use client";

import { motion } from "framer-motion";
import Wrapper from "@/components/shared/Wrapper";
import Container from "@/components/shared/Container";
import { Clock, Eye, Calendar } from "lucide-react";
import Image from "next/image";

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
        <div className="space-y-8">
          {/* Top Notification */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-lg border border-border bg-secondary/50 p-4 text-center backdrop-blur-sm"
          >
            <p className="text-muted-foreground">
              🚧 Blog is under construction, stay tuned for more content!
            </p>
          </motion.div>

          {/* Blog List */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {MOCK_POSTS.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:bg-secondary/50"
              >
                {/* Inset Shadow Container */}
                <div className="absolute inset-[1px] rounded-[11px] bg-gradient-to-b from-white/5 to-transparent" />

                {/* Cover Image Container */}
                <div className="relative mx-3 mt-3 overflow-hidden rounded-lg bg-muted/20">
                  {/* 简化边框效果，只保留一个更清晰的边框 */}
                  <div className="absolute inset-0 z-20 rounded-lg ring-1 ring-black/10 dark:ring-white/20" />

                  <div className="aspect-video">
                    {/* 优化渐变效果，让图片更清晰 */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/80 via-background/5 to-transparent" />

                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      priority
                      className="object-cover transition-all duration-300 will-change-transform group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Content Area */}
                <div className="relative space-y-4 p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary/20 px-2 py-1 text-xs text-white ring-1 ring-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title and Description */}
                  <div>
                    <h2 className="mb-2 text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">
                      {post.title}
                    </h2>
                    <p className="line-clamp-2 text-muted-foreground">
                      {post.description}
                    </p>
                  </div>

                  {/* Meta Information - 优化对齐和间距 */}
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <div className="flex w-32 items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        <span>{post.publishDate}</span>
                      </div>
                      <div className="flex w-24 items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        <span>{post.readingTime} min</span>
                      </div>
                    </div>
                    <div className="ml-auto flex items-center gap-1.5">
                      <Eye className="h-4 w-4" />
                      <span>Preview</span>
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
