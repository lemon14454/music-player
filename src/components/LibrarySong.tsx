import { useContext } from "react";
import { ActionType, MusicContext, Song } from "../state";

const LibrarySong = (song: Song) => {
  const {
    state: { audioRef, isPlaying, currentSong },
    dispatch,
  } = useContext(MusicContext);

  const songSelectHandler = async () => {
    await dispatch({ type: ActionType.SET_CURRENT_SONG, payload: song });
    if (isPlaying) audioRef?.current.play();
  };

  return (
    <div
      className={`library-song ${song.id === currentSong.id ? "selected" : ""}`}
      onClick={songSelectHandler}
    >
      <img src={song.cover} alt="" />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
