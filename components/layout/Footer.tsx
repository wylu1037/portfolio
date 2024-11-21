import Link from "next/link";
import { memo } from "react";
import { ThemeToggle } from "../theme/theme-toggle";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconHeart,
  IconBrandX,
} from "@tabler/icons-react";

const Footer = memo(() => {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 py-16 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About</h3>
            <p className="text-sm leading-loose text-muted-foreground">
              A passionate developer focused on creating innovative and
              user-friendly web applications.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/wylu1037"
                className="text-muted-foreground hover:text-foreground"
              >
                <IconBrandGithub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://twitter.com/wylu1037"
                className="text-muted-foreground hover:text-foreground"
              >
                <IconBrandX className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/%E6%96%87%E6%89%AC-%E5%8D%A2-2b93ba298/"
                className="text-muted-foreground hover:text-foreground"
              >
                <IconBrandLinkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="wylu1037@gmail.com"
                className="text-muted-foreground hover:text-foreground"
              >
                <IconMail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Projects</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/projects/featured"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Featured Work
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/latest"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Latest Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/archive"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Archive
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/licensing"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between space-y-4 border-t pt-8 md:flex-row md:space-y-0">
          <div className="flex items-center space-x-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} WenyangLu™. All rights reserved.
            </p>
            <ThemeToggle />
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-sm text-muted-foreground">Crafted with</span>
            <IconHeart className="motion-preset-blink h-4 w-4 fill-red-500 text-red-500 motion-ease-spring-smooth" />
            <span className="text-sm text-muted-foreground">by WenyangLu</span>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
