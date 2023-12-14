import { useState, useEffect } from 'react';
import styles from 'styles/audioPlayer/Song.module.css';
import Image from 'next/image';

export type Song = {
  id: number;
  title: string;
  artist: string;
  file: string;
  cover: string;
};

const SongComponent = (props: { song: Song; isPlaying: boolean }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (props.isPlaying) {
      // Rotate continuously when playing
      const rotateInterval = setInterval(() => {
        setRotation((prevRotation) => prevRotation % 360);
      }, 1); // Adjust the interval based on your animation speed

      return () => clearInterval(rotateInterval); // Clear the interval on component unmount
    }
  }, [props.isPlaying]);

  return (
    <div className={styles.cd} style={{ transform: `rotate(${rotation}deg)` }}>
      <Image
        src={props.song.cover}
        alt="Cover"
        className={props.isPlaying ? styles.turning : styles.notTurning}
        width={300}
        height={300}
      />
    </div>
  );
};

export default SongComponent;
