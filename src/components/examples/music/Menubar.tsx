import { Menubar } from "@/components/raxwind"
import { File, Music } from "lucide-react";


const MusicMenuBar = () => {
    return <Menubar className="rounded-none border-b px-2 lg:px-4" items={[{
        label: "Music",
        className: "font-bold",
        children: {
            align: "start",
            items: [{
                label: "New Playlist",
                icon: <Music size={14} />,
                subsets: [
                    {
                        items: [
                            {
                                label: "New Playlist",
                                icon: <Music size={14} />,
                                onClick: () => console.log("Do something"),
                            }, {
                                label: "New Playlist",
                                icon: <Music size={14} />,
                            }]
                    }
                ]
            }, {
                label: "New Playlist",
                icon: <Music size={14} />,
            }]
        }
    }, {
        label: "File",
        children: {
            items: [{
                label: "New Playlist",
                icon: <Music size={14} />,
            }, {
                label: "New Playlist",
                icon: <Music size={14} />,
            }]
        }
    }]} />

}


export default MusicMenuBar