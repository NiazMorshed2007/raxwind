import { Inter } from "@next/font/google"

const inter = Inter({ subsets: ['latin'] })

interface Props {
    children: React.ReactNode
}

const ExampleController: React.FC<Props> = (props) => {
    return <main className={`${inter.className}`}>
        <div className="example-content-wrapper">{props.children}</div>
    </main>
}

export default ExampleController