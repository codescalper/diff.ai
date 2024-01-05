"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { toast as sonner } from "sonner";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useChat } from "ai/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
const Diff = () => {
  const [acronym, setacronym] = useState<boolean>(false);
  const [topic1, setTopic1] = useState<String>("");
  const [topic2, setTopic2] = useState<String>("");
  const [numberOfDiff, setNumberOfDiff] = useState<number>(0);
  const { toast } = useToast();
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      body: {
        topic1,
        topic2,
        numberOfDiff,
        acronym,
      },

      onError: (err: any) => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: `${err.message}`,
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      },
    });

  const onSubmit = (e: any) => {
    console.log("submitting");
    e.preventDefault();
    handleSubmit(e);
   
  };



  console.log(topic1);
  const lastMessage = messages[messages.length - 1];
  console.log(lastMessage);

  const generatedResp =
    lastMessage?.role === "assistant" ? lastMessage.content : null;

    
  useEffect(() => {
    scrollToDiff();
  }, [generatedResp]);

  const splittedArray = [];
  // Initialize the current index to 0
  let currentIndex = 0;

  useEffect(() => {
    setTopic1(input);
  }, [input]);

  // Loop from 1 to num
  if (generatedResp) {
    const splitArray = generatedResp.split("Here is the acronym");
    // Use the first part of the split array
    const firstPart = splitArray[0];
    // Update the currentIndex to the length of the first part
    currentIndex = firstPart.length;

    // Push the first part to the array
    splittedArray.push(firstPart);

    // Loop through the remaining parts
    for (let i = 1; i < splitArray.length; i++) {
      // Push the remaining parts to the array
      splittedArray.push("Here is the acronym" + splitArray[i]);
    }
  }

  const diffReff = useRef<null | HTMLDivElement>(null);

  const scrollToDiff = () => {
    if (diffReff.current !== null) {
      diffReff.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4">
        <h1 className="sm:text-6xl text-4xl max-w-[708px] font-bold">
          Discover <span className="text-gradient ">Differences </span> with
          diff.ai
        </h1>

        <p className="text-xl text-slate-300 mt-5">
          An AI-powered tool to analyze and differentiate topics effortlessly.
        </p>
        <form>
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
            <div
              draggable="false"
              className="flex flex-col xl:flex-row items-center space-x-0 xl:space-x-3 mt-3"
            >
              <Input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Rust"
                className="w-full rounded-md shadow-sm focus:border-cyan-500 focus:shadow-sm focus:shadow-cyan-500 focus:ring-cyan-200 p-2"
              />
              <h1 className="font-bold text-glow">VS</h1>
              <Input
                type="text"
                onChange={(e) => setTopic2(e.target.value)}
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
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const value = parseInt(e.target.value);
                  if (!isNaN(value) && value >= 1 && value <= 10) {
                    setNumberOfDiff(value);
                  } else {
                    // Show an error message
                    toast({
                      variant: "destructive",
                      title: "Invalid Input",
                      description: "Please enter a number between 1 and 10.",
                      action: <ToastAction altText="OK">Try again</ToastAction>,
                    });
                  }
                }}
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
              <Checkbox
                id="acronym
OrNot"
                onCheckedChange={() => setacronym(!acronym)}
              />
              <label
                htmlFor="acronym
OrNot"
                className="text-sm pl-3 xl:pl-0 font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Acronyms?
              </label>
            </div>
            {!isLoading && (
              <Button
                onClick={onSubmit}
                className="font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-white/80 w-full"
              >
                {" "}
                Differentiate 🚀{" "}
              </Button>
            )}
            {isLoading && (
              <Button
                disabled
                className="font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-white/80 w-full"
              >
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-4 h-4 me-3 text-zinc-40"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="#1C64F2"
                  />
                </svg>
                Differentiating...
              </Button>
            )}
          </div>
        </form>
        <hr className="h-px bg-gray-700 border-1 dark:bg-gray-700" />
        <output className="space-y-10 my-10 mt-10 ">
        {generatedResp && (
          <>
         
            <div>
              <h2  ref={diffReff} className="xl:text-4xl text-3xl text-center font-bold mx-auto">
                Here&rsquo;s Your <span className="text-gradient">Markdown</span>{" "}
                Table
              </h2>
            </div>
          
            <div className="space-y-8 xl:p-5 p-10 flex flex-col items-center justify-center max-w-xl mx-auto">
              {splittedArray.map((generatedDiff, index) => (
                <div
                  className="bg-white dark:bg-black/75 rounded-xl box-glow  border-cyan-500 p-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-copy border"
                  onClick={() => {
                    console.log("Copying to clipboard...");
                    navigator.clipboard.writeText(generatedDiff);
                    sonner("Copied", {
                      description: "Copied to your clipboard ",
                      icon: "📋",
                      action: {
                        label: "Close",
                        onClick() {
                          console.log('ok');
                        },
                      },
                    });
                  }}
                  
                  key={index} 
                >
                  <style>
                    {`
                    table {
                      border-collapse: collapse;
                      width: 100%;
                      border: 2px solid rgba(52, 235, 204,0.4); 
                      
                    }
                    th, td {
                      border: 1px solid rgba(52, 235, 204,0.4); 
                      border-radius: 5px;
                      padding: 8px;
                      text-align: left;
                    }
                  `}
                  </style>
                  <p>
                    {" "}
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {generatedDiff}
                    </ReactMarkdown>
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </output>
      </main>

     
    </div>
  );
};

export default Diff;
