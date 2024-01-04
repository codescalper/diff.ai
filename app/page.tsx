import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import Image from "next/image"
export default function Home() {
  return (
  <>
  
      <div className="flex max-w-5xl animate-fade-in mx-auto flex-col items-center justify-center py-2 mt-20">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(100%_50%_at_50%_0%,rgba(129,0,250,0.13)_0,rgba(129,0,250,0)_50%,rgba(129,0,250,0)_100%)]"></div>
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4">
    <h1 className="sm:text-6xl text-4xl max-w-[708px] font-bold">
      Discover Differences with diff.ai
    </h1>

    <p className="text-xl text-slate-300 mt-5">
      An AI-powered tool to analyze and differentiate topics effortlessly.
    </p>

    <div className="max-w-xl w-full mt-10">
      <div className="flex items-center space-x-3">
        <Image
          src="/1.png"
          width={30}
          height={30}
          alt="Topic icon"
          className="mb-5 sm:mb-0"
        />
        <p className="text-left font-medium">
          Enter your topics which you want to differentiate:
        </p>
      </div>
      <div className="flex flex-col xl:flex-row items-center space-x-0 xl:space-x-3 mt-3">
        <Input
          type="text"
          placeholder="Rust"
          className="w-full rounded-md shadow-sm focus:border-cyan-500 focus:shadow-sm focus:shadow-cyan-500 focus:ring-cyan-200 p-2"
        />
        <Input
          type="text"
          placeholder="Go-lang"
          className="w-full rounded-md shadow-sm mt-5 xl:mt-0 focus:border-cyan-500 focus:shadow-sm focus:shadow-cyan-500 focus:ring-cyan-200 p-2"
        />
    
      </div>

      <div className="flex items-center mt-5 xl:mt-10 space-x-3">
        <Image
          src="/2.png"
          width={30}
          height={30}
          alt="Topic icon"
          className="mb-5 sm:mb-0"
        />
        <p className="text-left font-medium">
          Enter the number of differenitaion you want to see:
        </p>
      </div>

      <div className="flex items-center space-x-0 xl:space-x-3 mt-3">
        <Input
          type="number"
          placeholder="8"
          className="w-full xl:w-1/2 rounded-md shadow-sm focus:border-cyan-500 focus:shadow-sm focus:shadow-cyan-500 focus:ring-cyan-200 p-2"
        />
       
      </div>

      <div className="flex items-center mt-5 xl:mt-10 space-x-3">
        <Image
          src="/3.png"
          width={30}
          height={30}
          alt="Topic icon"
          className="mb-5 sm:mb-0"
        />
        <p className="text-left font-medium">
        Choose whether to include acronyms for differentiation:
        </p>
      </div>

      <div className="flex items-center space-x-0 xl:space-x-3 mt-5">
        <Checkbox id="acronymnOrNot" />
      <label
        htmlFor="acronymnOrNot"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Acronyms?
      </label>
      </div>

      </div>
</main>
      </div>
  </>
  )
}
