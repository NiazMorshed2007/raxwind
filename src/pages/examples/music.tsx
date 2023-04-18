import { NextPage } from "next";
import { Inter } from "@next/font/google"
import MusicMenuBar from "@/components/examples/music/Menubar";
import MusicSidebar from "@/components/examples/music/Sidebar";
import { Button, ScrollArea, Tabs } from "@/components/raxwind";
import { PlusCircle } from "lucide-react";

const inter = Inter({ subsets: ['latin'] })

// this is the example page where all radxwind components are shown
const Example: NextPage = () => {
    return <main className="w-screen h-screen overflow-hidden">
        <MusicMenuBar />
        <div style={{
            height: "calc(100vh - 42px)"
        }} className="main-content-wrapper gap-1 flex">
            <MusicSidebar />

            <ScrollArea style={{
                width: "calc(100vw - 250px)"
            }}>
                <div className="flex-1 p-10">
                    <Tabs tabs={{
                        className: "",
                        after: <Button>
                            <PlusCircle className="mr-2 h-4 w-4" />
                            Add music
                        </Button>,
                        items: [{
                            label: "Music",
                            value: "music",
                            tabContent: <div className="mt-10">
                                <h1 className="text-xl font-bold">Music Tab</h1>
                                <p className="mt-5">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veniam aperiam iste accusantium assumenda neque, explicabo, reprehenderit illo, odio veritatis rerum! Amet enim beatae voluptatum facilis temporibus, ab accusamus dolores?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dicta odit, laudantium sed iure doloremque amet voluptatem magnam eos aspernatur error, alias dolores saepe dolore esse ad illum. Expedita, inventore!m
                                </p>
                                <Button className="mt-10">Like what you see?</Button>
                            </div>
                        },
                        {
                            label: "Podcasts",
                            value: "podcasts",
                            tabContent: <div className="mt-10">
                                <h1 className="text-xl font-bold">Podcasts Tab</h1>
                                <p className="mt-5">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veniam aperiam iste accusantium assumenda neque, explicabo, reprehenderit illo, odio veritatis rerum! Amet enim beatae voluptatum facilis temporibus, ab accusamus dolores?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dicta odit, laudantium sed iure doloremque amet voluptatem magnam eos aspernatur error, alias dolores saepe dolore esse ad illum. Expedita, inventore!m
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dicta odit, laudantium sed iure doloremque amet voluptatem magnam eos aspernatur error, alias dolores saepe dolore esse ad illum. Expedita, inventore!m
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dicta odit, laudantium sed iure doloremque amet voluptatem magnam eos aspernatur error, alias dolores saepe dolore esse ad illum. Expedita, inventore!m
                                </p>
                            </div>
                        },
                        {
                            label: "Live",
                            value: "live",
                            disabled: true,
                        },
                        ]
                    }} />
                </div>
            </ScrollArea>

        </div>

    </main>
}


Example.getLayout = (page: React.ReactNode) => {
    return <div className={`${inter.className}`}>{page}</div>
}


export default Example