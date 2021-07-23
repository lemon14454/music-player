import { useContext } from "react";
import { MusicContext } from "../state";

const Song = () => {
  const {
    state: { currentSong, isPlaying },
  } = useContext(MusicContext);

  return (
    <div className="song-container">
      <img
        className={isPlaying ? "rotateSong" : ""}
        src={currentSong.cover}
        alt=""
      />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
