import Diff from "@/components/Diff";

export default function Home() {
  return (
  <>
  
      <div className="flex max-w-5xl animate-fade-in mx-auto flex-col items-center justify-center py-2 mt-20">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(100%_50%_at_50%_0%,rgba(129,0,250,0.13)_0,rgba(129,0,250,0)_50%,rgba(129,0,250,0)_100%)]"></div>
      <Diff />
      </div>
  </>
  )
}
