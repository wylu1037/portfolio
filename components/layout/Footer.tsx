import Link from "next/link";
import { memo } from "react";
import { ThemeToggle } from "../theme/theme-toggle";
import {
  IconCode,
  IconHeart,
  IconRocket,
  IconBrandDiscordFilled,
  IconBrandLinkedinFilled,
  IconBrandXFilled,
  IconBrandGithubFilled,
} from "@tabler/icons-react";

const Footer = memo(() => {
  return (
    <footer>
      <div className="mx-auto px-4 sm:max-w-6xl sm:px-6">
        <div className="flex flex-col items-center justify-between gap-8 border-t border-zinc-200 py-8 dark:border-zinc-800 sm:flex-row md:py-12">
          <div className="flex w-full flex-col">
            {/* Logo */}
            <div className="mb-4">
              <Link
                href="/"
                className="flex h-8 w-8 items-center justify-center rounded bg-background shadow-sm shadow-zinc-950/20"
              >
                <span className="text-2xl">🔥</span>
              </Link>
            </div>
            {/* Copyright */}
            <div>
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} WenyangLu™. All rights reserved.
              </p>
            </div>
            {/* Links */}
            <div className="mt-4 flex space-x-3 text-sm">
              <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Status
              </Link>
              <Link
                href="/terms-of-service"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy-policy"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Privacy Policy
              </Link>
            </div>
            {/* Social Links */}
            <div className="mb-1 mt-4 flex space-x-4">
              <Link
                href="https://twitter.com/wylu1037"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <IconBrandXFilled className="h-6 w-6" />
              </Link>
              <Link
                href="https://github.com/wylu1037"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <IconBrandGithubFilled className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/%E6%96%87%E6%89%AC-%E5%8D%A2-2b93ba298/"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <IconBrandLinkedinFilled className="h-6 w-6" />
              </Link>
              <Link
                href="wylu1037@gmail.com"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <IconBrandDiscordFilled className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-6">
            <div>
              <p className="text-justify text-sm leading-loose text-muted-foreground md:max-w-md">
                A passionate developer focused on creating innovative and
                user-friendly web applications.
              </p>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center space-x-3">
                <IconCode className="h-5 w-5 text-muted-foreground" />
                <IconHeart className="h-5 w-5 text-red-500" />
                <IconRocket className="h-5 w-5 text-muted-foreground" />
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Text Effect */}
      <div
        className="relative -z-10 mx-auto -mt-8 hidden h-[100px] w-full overflow-clip sm:h-[140px] sm:max-w-6xl md:block lg:h-[184px]"
        aria-hidden="true"
      >
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[120px] font-bold leading-none before:bg-gradient-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['Portfolio'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['Portfolio'] after:[text-shadow:0_1px_0_white] dark:before:from-zinc-800 dark:before:to-zinc-900/30 dark:after:bg-zinc-800/70 dark:after:[text-shadow:0_1px_0_black] sm:text-[180px] lg:text-[255px]"></div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
