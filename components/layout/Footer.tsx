import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import { ThemeToggle } from "../theme/theme-toggle";

const Footer = memo(() => {
  return (
    <footer className="border-gray-200 bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="#"
            className="mb-4 flex items-center space-x-3 sm:mb-0 rtl:space-x-reverse"
          >
            <Image
              src="https://flowbite.com/docs/images/logo.svg"
              width={32}
              height={32}
              alt="Flowbite Logo"
              priority
            />
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              WenyangLu
            </span>
          </Link>
          <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0">
            <li>
              <a href="#" className="me-4 hover:underline md:me-6">
                About
              </a>
            </li>
            <li>
              <Link href="#" className="me-4 hover:underline md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="me-4 hover:underline md:me-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link href="#" className="me-4 hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <span className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2024{" "}
          <Link href="#" className="hover:underline">
            WenyangLu™
          </Link>
          . All Rights Reserved.
          <ThemeToggle />
        </span>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
