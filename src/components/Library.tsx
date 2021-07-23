import { useContext } from "react";
import { MusicContext } from "../state";
import LibrarySong from "./LibrarySong";

interface LibraryProps {
  libraryStatus: boolean;
}

const Library = ({ libraryStatus }: LibraryProps) => {
  const {
    state: { songList },
  } = useContext(MusicContext);

  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>播放清單</h2>
      <div className="library-songs">
        {songList.map((song) => (
          <LibrarySong {...song} key={song.id} />
        ))}
      </div>
    </div>
  );
};

export default Library;
