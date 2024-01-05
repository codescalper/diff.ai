import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="  w-full border-t border-gray-700 border-opacity-50 dark:border-opacity-20 mt-16">
        <div className="mx-auto sm:max-w-7xl text-center py-5 px-6 sm:px-0">
          <div className="text-gray-500 dark:text-white/80 text-base sm:text-lg">
            Built by{" "}
            <a
              href="https://twitter.com/mayanks_tw"
              rel="noopener"
              target="_blank"
              className="underline underline-offset-4"
            >
              mayank
            </a>{" "}
            deployed on{" "}
            <a
              href="https://vercel.com"
              rel="noopener"
              target="_blank"
              className="underline underline-offset-4"
            >
              vercel
            </a>
            {" "}
            made with {" "}
            <a 
            href="https://sdk.vercel.ai/docs"
            rel="noopener"
            target="_blank"
            className="underline underline-offset-4"
            >
              {" "}
              vercel AI SDK
            </a>
            <div className="flex  items-center justify-center p-3 xl:p-4  dark:text-gray-500  space-x-2 xl:space-x-4">
              <Link
                className="hover:dark:text-white/80 transition"
                target="blank"
                href="https://github.com/codescalper/filestruct-rust"
              >
                <FaGithub />
              </Link>
              <Link
                className="hover:dark:text-white/80 transition"
                target="blank"
                href="https://twitter.com/mayanks_tw"
              >
                <FaTwitter />
              </Link>
              <Link
                className="hover:dark:text-white/80 transition"
                target="blank"
                href="https://www.linkedin.com/in/mayankonli"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;