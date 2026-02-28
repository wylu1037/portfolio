import Link from "next/link";
import { memo } from "react";
import { ThemeToggle } from "../theme/theme-toggle";
import { Icon } from "@iconify/react";
import WatermarkText from "../shared/WatermarkText";

const Footer = memo(() => {
  return (
    <footer>
      <div className="mx-auto px-4 sm:max-w-6xl sm:px-6">
        <div className="flex flex-col items-center justify-between gap-8 border-t border-zinc-200 py-8 sm:flex-row md:py-12 dark:border-zinc-800">
          <div className="flex w-full flex-col">
            {/* Logo */}
            <div className="mb-4">
              <Link
                href="/"
                className="bg-background flex h-8 w-8 items-center justify-center rounded shadow-xs shadow-zinc-950/20"
              >
                <span className="text-2xl">🔥</span>
              </Link>
            </div>
            {/* Copyright */}
            <div>
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} WenyangLu™. All rights reserved.
              </p>
            </div>
            {/* Social Links */}
            <div className="mt-4 mb-1 flex space-x-4">
              <Link
                href="https://twitter.com/wylu1037"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon icon="tabler:brand-x-filled" className="h-6 w-6" />
              </Link>
              <Link
                href="https://github.com/wylu1037"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon icon="tabler:brand-github-filled" className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/%E6%96%87%E6%89%AC-%E5%8D%A2-2b93ba298/"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon icon="tabler:brand-linkedin-filled" className="h-6 w-6" />
              </Link>
              <Link
                href="wylu1037@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon icon="tabler:brand-discord-filled" className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-6">
            <div>
              <p className="text-muted-foreground text-justify text-sm leading-loose md:max-w-md">
                A passionate developer focused on creating innovative and
                user-friendly web applications.
              </p>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center space-x-3">
                <Icon
                  icon="tabler:code"
                  className="text-muted-foreground h-5 w-5"
                />
                <Icon icon="lucide:heart" className="h-5 w-5 text-red-500" />
                <Icon
                  icon="tabler:rocket"
                  className="text-muted-foreground h-5 w-5"
                />
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Text Effect */}
      <WatermarkText text="Portfolio" className="-mt-8" />
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
