import Link from 'next/link';
import { Button } from './ui/button';


export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-3">
        <h1 className="sm:text-3xl text-2xl font-bold ml-2 tracking-tight">
          diff.ai
        </h1>
      </Link>
      <a
        href="#"
        rel="noopener noreferrer"
      >
        <Button>Differentiate</Button>
      </a>
    </header>
  );
}