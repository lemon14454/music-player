export interface stateInterface {
  songList: Song[];
  currentSong: Song;
  isPlaying: boolean;
  songInfo: songInfo;
  audioRef: React.MutableRefObject<any> | null;
}

export type songInfo = {
  currentTime: number;
  duration: number;
  animationPercentage: number;
  volume: number;
};

export type Song = {
  name: string;
  cover: string;
  artist: string;
  audio: string;
  color: string[];
  id: string;
  active: boolean;
};

export const initialState: stateInterface = {
  songList: [],
  currentSong: {
    name: "",
    cover: "",
    artist: "",
    audio: "",
    color: ["", ""],
    id: "",
    active: false,
  },
  isPlaying: false,
  songInfo: {
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
    volume: 0,
  },
  audioRef: null,
};
