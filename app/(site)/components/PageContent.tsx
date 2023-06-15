"use client";

import SongItem from "@/components/SongItem";
import { Song } from "@/types";

interface PageConttentProps {
    songs: Song[];
}

const PageContent: React.FC<PageConttentProps> = ({
    songs
}) => {
    if (songs.length === 0) {
        return (
            <div className="mt-4 text-neutral-400">
                No songs found!
            </div>
        );
    }
    return (
        <div
            className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-8
            gap-4
            mt-4
        "
        >
            {songs.map((item) => (
                <SongItem 
                    key={item.id}
                    onClick={() => {}}
                    data={item}
                />
            ))}
        </div>
    );
}

export default PageContent;