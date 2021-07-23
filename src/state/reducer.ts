import { Actions, ActionType } from "./actions";
import { stateInterface } from "./state";

export const musicReducer = (state: stateInterface, action: Actions) => {
  switch (action.type) {
    case ActionType.SET_SONG_LIST:
      return { ...state, songList: action.payload };
    case ActionType.SET_CURRENT_SONG:
      return { ...state, currentSong: action.payload };
    case ActionType.SET_IS_PLAYING:
      return { ...state, isPlaying: action.payload };
    case ActionType.SET_SONG_INFO:
      return { ...state, songInfo: action.payload };
    case ActionType.SET_AUDIO_REF:
      return { ...state, audioRef: action.payload };
  }
};
