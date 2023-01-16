import { useProcesses } from 'contexts/process';
import mainResponse from 'responses/main';
import AudioPlayer from './AudioPlayer';
import { Song } from './types';

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
    processes: {
      [id]: { url = '' }
    }
  } = useProcesses();

  return <AudioPlayer songs={tracklist} />;
};

export default AudioP;
