"use client";

import { motion, AnimatePresence } from "framer-motion";
import Wrapper from "@/components/shared/Wrapper";
import Container from "@/components/shared/Container";
import { Clock, Calendar } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { MOCK_POSTS } from "@/data/blog";
import { useState } from "react";
import { BlurFade } from "../magicui/blur-fade";
import { cn } from "@/lib/utils";

export default function Blog() {
  return (
    <Wrapper className="mt-40 min-h-screen bg-transparent">
      <Container>
        <div className="space-y-12">
          <BlurFade delay={0.4}>
            <div className="space-y-4 text-center">
              <div className="bg-foreground text-background inline-block rounded-lg px-3 py-1 text-sm">
                Blog Posts
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Code & Thoughts
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Exploring software development across TypeScript, Go, Rust, and
                more languages
              </p>
            </div>
          </BlurFade>
          {/* 博客列表 */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {MOCK_POSTS.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}

function BlogCard({ post }: { post: (typeof MOCK_POSTS)[0] }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setTimeout(() => {
      setShowContent(true);
    }, 200);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowContent(false); // 立即隐藏内容
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group border-border bg-card/50 hover:bg-card relative h-[400px] overflow-hidden rounded-lg border backdrop-blur-xs transition-all"
    >
      {/* 封面图片容器 - 默认占满整个卡片，hover时缩小到40% */}
      <motion.div
        className="absolute inset-0 z-10"
        animate={{
          height: isHovered ? "40%" : "100%",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* 渐变遮罩 */}
          <div className="absolute inset-0 bg-gradient-to-t to-transparent" />
        </div>
      </motion.div>

      {/* 内容区域 - 默认在底部，hover时显示完整 */}
      <div className="absolute right-0 bottom-0 left-0 z-20 space-y-4 p-4">
        {/* 标签 */}
        <div
          className={`flex flex-wrap gap-2 transition-opacity duration-300 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          {post.tags.map((tag) => (
            <Badge variant="outline" key={tag}>
              {tag}
            </Badge>
          ))}
        </div>

        {/* 标题和描述 */}
        <div className="space-y-2">
          <h2
            className={cn(
              `text-foreground group-hover:text-primary text-xl font-bold tracking-tight transition-colors`,
              showContent ? "opacity-100" : "opacity-0",
            )}
          >
            {post.title}
          </h2>
          <p
            className={`text-muted-foreground line-clamp-2 text-sm transition-opacity duration-300 ${
              showContent ? "opacity-100" : "opacity-0"
            }`}
          >
            {post.description}
          </p>
        </div>

        {/* 元信息 */}
        <div
          className={`text-muted-foreground flex items-center justify-between text-xs transition-opacity duration-300 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            <time dateTime={post.publishDate}>{post.publishDate}</time>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            <span>{post.readingTime} min read</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
