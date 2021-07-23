import { useContext } from "react";
import { FaPlay } from "react-icons/fa";
import { GiPauseButton } from "react-icons/gi";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import { ActionType, MusicContext } from "../state";

const Player = () => {
  const {
    state: { audioRef, isPlaying, songInfo, songList, currentSong },
    dispatch,
  } = useContext(MusicContext);

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef!.current.pause();
    } else {
      audioRef!.current.play();
    }
    dispatch({ type: ActionType.SET_IS_PLAYING, payload: !isPlaying });
  };

  const getTime = (time: number) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e: any) => {
    const newSongInfo = {
      currentTime: e.target.value,
      duration: songInfo.duration,
      volume: songInfo.volume,
      animationPercentage: songInfo.animationPercentage,
    };
    audioRef!.current.currentTime = e.target.value;
    dispatch({ type: ActionType.SET_SONG_INFO, payload: newSongInfo });
  };

  const skipTrackHandler = async (direction: string) => {
    let currentIdx = songList.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      await dispatch({
        type: ActionType.SET_CURRENT_SONG,
        payload: songList[(currentIdx + 1) % songList.length],
      });
    } else {
      await dispatch({
        type: ActionType.SET_CURRENT_SONG,
        payload: songList[(currentIdx - 1 + songList.length) % songList.length],
      });
    }
    if (isPlaying) audioRef?.current.play();
  };

  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>

        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
          }}
          className="track"
        >
          <input
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
            type="range"
          />
          <div style={trackAnim} className="animate-track"></div>
        </div>

        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FiChevronsLeft
          onClick={() => skipTrackHandler("skip-back")}
          className="icon"
        />
        {isPlaying ? (
          <GiPauseButton className="icon" onClick={playSongHandler} />
        ) : (
          <FaPlay className="icon" onClick={playSongHandler} />
        )}
        <FiChevronsRight
          onClick={() => skipTrackHandler("skip-forward")}
          className="icon"
        />
      </div>
    </div>
  );
};

export default Player;
