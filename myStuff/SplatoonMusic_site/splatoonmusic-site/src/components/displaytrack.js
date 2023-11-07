import { BsMusicNoteBeamed } from 'react-icons/bs';

const DisplayTrack = ({ currentTrack, audioRef, setDuration, progressBarRef, handleNext }) => {

  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  return (
    <div>
      <audio 
      src={currentTrack.src}
      ref={audioRef}
      onLoadedMetadata={onLoadedMetadata}
      onEnded={handleNext} 
      />
      <div className="audio-info">
        <div classname="audio-image">
          {currentTrack.thumbnail ? (
          <img src={currentTrack.thumbnail} alt="Audio Avatar" />
          ) : (
            <div className="icon-wrapper">
              <span classname="audio-icon">
                <BsMusicNoteBeamed />
              </span>
            </div>
          )}
        </div>
        <div classname="text">
          <p classname="title">{currentTrack.title}</p>
          <p>{currentTrack.artist}</p>
          <p>{currentTrack.section}</p>
        </div>
      </div>
    </div>
  );
};

export default DisplayTrack;