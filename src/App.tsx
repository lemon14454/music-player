import { useRef } from "react";
import { useState } from "react";
import { useEffect, useReducer } from "react";
import Library from "./components/Library";
import Nav from "./components/Nav";
import Player from "./components/Player";
import Song from "./components/Song";
import chillHop from "./data";
import { ActionType, initialState, MusicContext, musicReducer } from "./state";
import "./styles/app.scss";

function App() {
  const audio = useRef(null);
  const [state, dispatch] = useReducer(musicReducer, initialState);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const { currentSong, songList, isPlaying, audioRef } = state;

  const onEndedHandler = async () => {
    let currentIdx = songList.findIndex((song) => song.id === currentSong.id);
    await dispatch({
      type: ActionType.SET_CURRENT_SONG,
      payload: songList[(currentIdx + 1) % songList.length],
    });
    if (isPlaying) audioRef?.current.play();
  };

  const timeUpdateHandler = (e: any) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const newSongInfo = {
      currentTime: current,
      duration,
      animationPercentage: Math.round(
        (Math.round(current) / Math.round(duration)) * 100
      ),
      volume: 0,
    };

    dispatch({ type: ActionType.SET_SONG_INFO, payload: newSongInfo });
  };

  useEffect(() => {
    const data = chillHop();

    const init = async () => {
      await dispatch({ type: ActionType.SET_SONG_LIST, payload: data });
      await dispatch({ type: ActionType.SET_CURRENT_SONG, payload: data[0] });
      await dispatch({ type: ActionType.SET_AUDIO_REF, payload: audio });
    };

    init();
  }, []);

  return (
    <MusicContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Nav
          libraryStatus={libraryStatus}
          setLibraryStatus={setLibraryStatus}
        />
        <Song />
        <Player />
        <Library libraryStatus={libraryStatus} />
        <audio
          ref={audio}
          onLoadedMetadata={timeUpdateHandler}
          onTimeUpdate={timeUpdateHandler}
          onEnded={onEndedHandler}
          src={currentSong.audio}
        />
      </div>
    </MusicContext.Provider>
  );
}

export default App;
