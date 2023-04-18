import Header from "@/components/Header"
import { FC } from "react"
import { Inter } from "@next/font/google"

const inter = Inter({ subsets: ['latin'] })

interface Props {
    children: React.ReactNode
}

const MainController: FC<Props> = ({ children }) => {
    return <main className={`${inter.className}`}>
        <Header />
        <div className="main-content-wrapper">{children}</div>
    </main>
}

export default MainController