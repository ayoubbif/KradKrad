import { useProcesses } from 'contexts/process';
import mainResponse from 'responses/main';
import AudioPlayer from './AudioPlayer';
import { Song } from './types';
import styles from 'styles/audioPlayer/Song.module.css';

const songs: Song[] = [];

export const getStaticProps = async () => {
  return {
    props: {
      songs: songs
    },
    revalidate: 3600
  };
};

const AudioP = ({ id }): JSX.Element => {
  const tracklist = mainResponse;
  const {
    processes: {}
  } = useProcesses();

  return (
    <div className={styles.audioPlayer}>
      <AudioPlayer songs={tracklist} />
    </div>
  );
};

export default AudioP;
