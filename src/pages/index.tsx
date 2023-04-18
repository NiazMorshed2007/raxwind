import { Button } from "@/components/raxwind"
import { ArrowRight, Github } from "lucide-react"
import Link from "next/link"

const Home = () => {
  return <main className="container py-16">
    <h1 className="text-6xl w-9/12 leading-tight mb-6 font-black">Beautifully designed components
      built with <span className="text-blue-700"> RadixUI </span> and <span className=" text-blue-700">TailwindCSS</span>.</h1>
    <p className="text-xl w-9/12 font-sembiold mb-12">Accessible and customizable, JSON based components that you can copy and paste into your apps. Free & Open Source. Use this to build your own design system!</p>

    <div className="buttons flex items-center gap-6 mb-6">
      <Link href={"examples/music"}>
        <Button size={"lg"}>Show an example <ArrowRight size={20} /></Button>
      </Link>
      <Button variant={"secondary"} size={"lg"}><Github size={20} /> Star on Github</Button>
    </div>
    <p className="text-xs">Note: This project is inspired by @shadcn. Follow my journey on twitter.</p>
  </main>
}

export default Home