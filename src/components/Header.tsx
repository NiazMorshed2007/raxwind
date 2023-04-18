import { Github, Twitter } from "lucide-react"
import Link from "next/link"

const Header = () => {
    return (
        <header className="header py-5 border-b border-borderColor px-[5%] flex items-center justify-between">
            <div className="left flex items-center gap-7">
                <div className="logo">
                    <h1 className="text-xl font-bold">Raxwind Kit</h1>
                </div>
                <div className="line w-[1px] h-[30px] bg-foreground/40"></div>
                <nav className="middle flex items-center gap-4 text-sm">
                    <Link href={"/docs"}>Documentation</Link>
                    <Link href={"/docs/components"}>Components</Link>
                    <Link href={"/docs/components"}>GitHub</Link>
                </nav>
            </div>
            <div className="right flex items-center gap-6">
                <Link href={"/docs/components"}>
                    <Github />
                </Link>
                <Link target="_blank" href={"https://twitter.com/niazmorshed_"}>
                    <Twitter />
                </Link>
            </div>
        </header>
    )
}

export default Header

