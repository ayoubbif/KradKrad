export type Song = {
  id: number;
  title: string;
  artist: string;
  file: string;
  cover: string;
};

export type AudioPlayerProps = {
  isPlaying: boolean;
  setIsPlaying: Function;
  songs: Song[];
  currentTrack: number;
  setCurrentTrack: Function;
};
