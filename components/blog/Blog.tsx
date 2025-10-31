import Wrapper from "@/components/shared/Wrapper";
import Container from "@/components/shared/Container";
import { MOCK_POSTS } from "@/data/blog";
import { BlurFade } from "../magicui/blur-fade";
import BlogCard from "./BlogCard";

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
