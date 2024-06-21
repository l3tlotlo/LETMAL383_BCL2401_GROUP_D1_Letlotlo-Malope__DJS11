/* eslint-disable react/prop-types */
import { useRef, useEffect, useState } from 'react';

const AudioPlayer = ({ src, onPlay, onPause }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audioElement = audioRef.current;

    const handleLoadedData = () => {
      console.log('Audio loaded');
      if (isPlaying) {
        audioElement.play().catch((error) => {
          console.error('Play interrupted:', error);
        });
      }
    };

    const handleError = (e) => {
      console.error('Audio error:', e);
    };

    audioElement.addEventListener('loadeddata', handleLoadedData);
    audioElement.addEventListener('error', handleError);

    return () => {
      audioElement.removeEventListener('loadeddata', handleLoadedData);
      audioElement.removeEventListener('error', handleError);
    };
  }, [src, isPlaying]);

  const handlePlay = () => {
    setIsPlaying(true);
    onPlay(); // Invoke the onPlay prop if provided
  };

  const handlePause = () => {
    setIsPlaying(false);
    onPause(); // Invoke the onPause prop if provided
  };

  useEffect(() => {
    const audioElement = audioRef.current;

    if (isPlaying) {
      if (audioElement.paused) {
        audioElement.play().catch((error) => {
          console.error('Play interrupted:', error);
        });
      }
    } else {
      if (!audioElement.paused) {
        audioElement.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="audio-player">
      <audio ref={audioRef} src={src} />
      {isPlaying ? (
        <button onClick={handlePause}>Pause</button>
      ) : (
        <button onClick={handlePlay}>Play</button>
      )}
    </div>
  );
};

export default AudioPlayer;
