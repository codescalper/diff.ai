import Link from 'next/link';
import { Button } from './ui/button';
import { FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-3">
        <h1 className="sm:text-3xl text-2xl font-bold ml-2 tracking-tight">
          diff.ai
        </h1>
      </Link>
      <a
        href="https://github.com/codescalper/diff.ai"
        target='blank'
        rel="noopener noreferrer"
      >
        <Button className='text-center gap-2 text-sm xl:text-md'>Star on Github<FaGithub /> </Button>
      </a>
    </header>
  );
}