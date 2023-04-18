import { Button } from "@/components/raxwind"
import { ScrollArea } from "@/components/raxwind"
import { cn } from "@/lib/utils"
import { LayoutGrid, Library, ListMusic, Mic2, Music2, PlayCircle, Radio, User } from "lucide-react"

const MusicSidebar = () => {
    return <ScrollArea>
        <aside className="w-[270px] border-r">
            <div className={cn("pb-12")}>
                <div className="space-y-4 py-4">
                    <div className="px-4 py-2">
                        <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
                            Discover
                        </h2>
                        <div className="space-y-1">
                            <Button
                                variant="secondary"
                                size="sm"
                                className="w-full justify-start"
                            >
                                <PlayCircle className="mr-2 h-4 w-4" />
                                Listen Now
                            </Button>
                            <Button variant="ghost" size="sm" className="w-full justify-start">
                                <LayoutGrid className="mr-2 h-4 w-4" />
                                Browse
                            </Button>
                            <Button variant="ghost" size="sm" className="w-full justify-start">
                                <Radio className="mr-2 h-4 w-4" />
                                Radio
                            </Button>
                        </div>
                    </div>
                    <div className="px-4 py-2">
                        <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
                            Library
                        </h2>
                        <div className="space-y-1">
                            <Button variant="ghost" size="sm" className="w-full justify-start">
                                <ListMusic className="mr-2 h-4 w-4" />
                                Playlists
                            </Button>
                            <Button variant="ghost" size="sm" className="w-full justify-start">
                                <Music2 className="mr-2 h-4 w-4" />
                                Songs
                            </Button>
                            <Button variant="ghost" size="sm" className="w-full justify-start">
                                <User className="mr-2 h-4 w-4" />
                                Made for You
                            </Button>
                            <Button variant="ghost" size="sm" className="w-full justify-start">
                                <Mic2 className="mr-2 h-4 w-4" />
                                Artists
                            </Button>
                            <Button variant="ghost" size="sm" className="w-full justify-start">
                                <Library className="mr-2 h-4 w-4" />
                                Albums
                            </Button>
                        </div>
                    </div>
                    <div className="py-2 px-4">
                        <h2 className="relative px-2 mb-2 text-lg font-semibold tracking-tight">
                            Playlists
                        </h2>
                        <div className="space-y-1">
                            <Button variant="ghost" size="sm" className="w-full justify-start">
                                <ListMusic className="mr-2 h-4 w-4" />
                                Playlists
                            </Button>
                            <Button variant="ghost" size="sm" className="w-full justify-start">
                                <Music2 className="mr-2 h-4 w-4" />
                                Songs
                            </Button>
                            <Button variant="ghost" size="sm" className="w-full justify-start">
                                <User className="mr-2 h-4 w-4" />
                                Made for You
                            </Button>
                            <Button variant="ghost" size="sm" className="w-full justify-start">
                                <Mic2 className="mr-2 h-4 w-4" />
                                Artists
                            </Button>
                            <Button variant="ghost" size="sm" className="w-full justify-start">
                                <Library className="mr-2 h-4 w-4" />
                                Albums
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    </ScrollArea>

}


export default MusicSidebar