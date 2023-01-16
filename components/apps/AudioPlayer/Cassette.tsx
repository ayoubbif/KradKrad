import { FiPlay, FiPause, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useState, useEffect, useRef, SyntheticEvent } from 'react';
import styles from './AudioPlayer.module.css';
import { AudioPlayerProps } from './types';

const Cassette = (props: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [timeSong, setTimeSong] = useState<{
    currentTime: number;
    duration: number;
  }>({
    currentTime: 0,
    duration: 0
  });

  const handlePlay = (): void => {
    props.setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handlePause = (): void => {
    props.setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const handlePreviousNext = (arg: string) => {
    let thisCurrentTrack = getTrackNumber(arg);
    props.setCurrentTrack(thisCurrentTrack);
  };

  const getTrackNumber = (arg: string): number => {
    let thisCurrentTrack = props.currentTrack;
    let numberOfTracks = props.songs.length;
    if (arg === 'previous') {
      thisCurrentTrack--;
      if (thisCurrentTrack < 0) {
        thisCurrentTrack = numberOfTracks - 1;
      }
    }
    if (arg === 'next') {
      thisCurrentTrack++;
      if (thisCurrentTrack >= numberOfTracks) {
        thisCurrentTrack = 0;
      }
    }

    return thisCurrentTrack;
  };

  useEffect(() => {
    if (props.isPlaying) {
      if (audioRef.current) {
        audioRef.current.play();
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }
  });

  const handleTimeUpdate = (e: SyntheticEvent<EventTarget>): void => {
    const current = (e.target as HTMLMediaElement).currentTime;
    const duration = (e.target as HTMLMediaElement).duration;

    if (current === duration) {
      handlePreviousNext('next');
    } else {
      let timeSong = {
        currentTime: current,
        duration: duration
      };
      setTimeSong(timeSong);
    }
  };

  const handleSongSlider = (e: SyntheticEvent<EventTarget>): void => {
    if (audioRef.current) {
      audioRef.current.currentTime = parseInt(
        (e.target as HTMLInputElement).value
      );
    }
    setTimeSong({
      ...timeSong,
      currentTime: parseInt((e.target as HTMLInputElement).value)
    });
  };
  const getTime = (time: number): string => {
    return (
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    );
  };

  return (
    <div>
      <div className={styles.audioTime}>
        <p>{getTime(timeSong.currentTime)}</p>
        <input
          type="range"
          className={styles.slider}
          min={0}
          max={timeSong.duration}
          value={timeSong.currentTime}
          onChange={handleSongSlider}
        />
        <p>{getTime(timeSong.duration)}</p>
      </div>
      <div className={styles.controlsContainer}>
        <audio
          ref={audioRef}
          src={props.songs[props.currentTrack].file}
          className={styles.controls}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleTimeUpdate}
          controls
        />
        <FiChevronLeft
          size={24}
          onClick={() => handlePreviousNext('previous')}
        />
        {props.isPlaying ? (
          <FiPause size={32} onClick={() => handlePause()} />
        ) : (
          <FiPlay size={32} onClick={() => handlePlay()} />
        )}
        <FiChevronRight size={24} onClick={() => handlePreviousNext('next')} />
      </div>
    </div>
  );
};

export default Cassette;
