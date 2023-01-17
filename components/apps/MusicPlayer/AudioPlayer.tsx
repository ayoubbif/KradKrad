import React, { useState } from 'react';
import type { Song } from './types';
import styles from 'styles/audioPlayer/AudioPlayer.module.css';
import Cassette from './Cassette';
import { NextPage } from 'next';
import SongComponent from './Song';

const Songs: Song[] = [];

export const getStaticProps = async () => {
  const allSongs: Song[] = Songs;
  return {
    props: {
      songs: allSongs
    },
    revalidate: 3600
  };
};

const AudioPlayer: NextPage<{ songs: Song[] }> = ({ songs }) => {
  const [currentTrack, setCurrentTrack] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  return (
    <>
      <div>
        <div className={styles.song}>
          <SongComponent song={songs[currentTrack]} isPlaying={isPlaying} />
        </div>
        <Cassette
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          songs={songs}
          currentTrack={currentTrack}
          setCurrentTrack={setCurrentTrack}
        />
      </div>
    </>
  );
};

export default AudioPlayer;
