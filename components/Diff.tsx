'use client'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { useState } from "react"
const Diff = () => {
  
   const [acronymn, setAcronymn] = useState(false);
   const [topic1, setTopic1] = useState('');
   const  [topic2, setTopic2] = useState('');
   const [numberOfDiff, setNumberOfDiff] = useState(0);

  console.log(acronymn);
  return (
    <div>
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
        <p className="text-left  font-medium">
          Enter your topics which you want to differentiate:
        </p>
      </div>
      <div draggable='false' className="flex flex-col xl:flex-row items-center space-x-0 xl:space-x-3 mt-3">
        <Input
          type="text"
          onChange={(e)=>setTopic1(e.target.value)}
          placeholder="Rust"
          className="w-full rounded-md shadow-sm focus:border-cyan-500 focus:shadow-sm focus:shadow-cyan-500 focus:ring-cyan-200 p-2"
        />
        <h1 className="font-bold text-glow">VS</h1>
        <Input
          type="text"
          onChange={(e)=>setTopic2(e.target.value)}
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setNumberOfDiff(parseInt(e.target.value))}
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
        <Checkbox id="acronymnOrNot" onCheckedChange={()=>setAcronymn(!acronymn)} />
      <label
        htmlFor="acronymnOrNot"
        className="text-sm pl-3 xl:pl-0 font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Acronyms?
      </label>
      </div>
      <Button className='font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-white/80 w-full' > Differentiate 🚀 </Button>

      </div>
</main>
    </div>
  )
}

export default Diff