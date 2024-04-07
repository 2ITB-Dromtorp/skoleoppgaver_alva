import { useRef, useState, useEffect } from 'react';
import { tracks } from '../data/tracks';

import { PiShuffleBold } from "react-icons/pi";

import DisplayTrack from './displaytrack';
import Controls from './controls';
import ProgressBar from './progressbar';
import CheckboxForm from './Form.js';
import SearchBar from './Topnav.js';
import fetchData from './../App.js'

const AudioPlayer = ( data ) => {

  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);

  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef();
  const progressBarRef = useRef();

  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
  };

  const handleSelectItem = ( index, filteredResults ) => {
    setTrackIndex(index);
    setCurrentTrack(filteredResults[index]);
  };

  return (
    <>
      <div className="audio-player">
        <div className='column'>
        <CheckboxForm />
        </div>
        <div className='column'>
        <SearchBar onSelectItem={handleSelectItem} />
        </div>
      <div className='column'>
        <div className="inner">
            <DisplayTrack {...{ currentTrack, audioRef, setDuration, progressBarRef, handleNext, }} />
            <p><PiShuffleBold /></p>
            <Controls {...{ audioRef, progressBarRef, duration, setTimeProgress, tracks, trackIndex, setTrackIndex, setCurrentTrack, handleNext, }} />
            <ProgressBar {...{ progressBarRef, audioRef, timeProgress, duration }} />
            </div>
        </div>
      </div>
    </>
  );
};

export default AudioPlayer;