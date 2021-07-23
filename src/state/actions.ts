import { Song, songInfo } from "./state";

export enum ActionType {
  SET_SONG_LIST = "setSongList",
  SET_CURRENT_SONG = "setCurrentSong",
  SET_IS_PLAYING = "setIsPlaying",
  SET_SONG_INFO = "setSongInfo",
  SET_AUDIO_REF = "setAudioRef",
}

export interface SetSongList {
  type: ActionType.SET_SONG_LIST;
  payload: Song[];
}

export interface SetCurrentSong {
  type: ActionType.SET_CURRENT_SONG;
  payload: Song;
}

export interface SetIsPlaying {
  type: ActionType.SET_IS_PLAYING;
  payload: boolean;
}

export interface SetSongInfo {
  type: ActionType.SET_SONG_INFO;
  payload: songInfo;
}

export interface SetAudioRef {
  type: ActionType.SET_AUDIO_REF;
  payload: React.MutableRefObject<any>;
}

export type Actions =
  | SetSongList
  | SetCurrentSong
  | SetIsPlaying
  | SetSongInfo
  | SetAudioRef;
