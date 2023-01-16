import styles from './Song.module.css';
import Image from 'next/image';

export type Song = {
  id: number;
  title: string;
  artist: string;
  file: string;
  cover: string;
};

const SongComponent = (props: { song: Song; isPlaying: boolean }) => {
  return (
    <>
      <div className={styles.cd}>
        <Image
          src={props.song.cover}
          alt="Cover"
          className={props.isPlaying ? styles.turning : styles.notTurning}
          width={300}
          height={300}
        />
      </div>
    </>
  );
};

export default SongComponent;
