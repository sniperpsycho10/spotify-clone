import { useState, useEffect, useRef } from "react";
import "./MusicPlayer.css";

function MusicPlayer({
  songs,
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
}) {
  const audioRef = useRef(null);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    if (currentSong && audioRef.current) {
      audioRef.current.load();

      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(console.error);
    }
  }, [currentSong]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const updateTime = () =>
      setCurrentTime(audio.currentTime);

    const updateDuration = () =>
      setDuration(audio.duration);

    const handleSongEnd = () => {
      nextSong();
    };

    audio.addEventListener(
      "timeupdate",
      updateTime
    );

    audio.addEventListener(
      "loadedmetadata",
      updateDuration
    );

    audio.addEventListener(
      "ended",
      handleSongEnd
    );

    return () => {
      audio.removeEventListener(
        "timeupdate",
        updateTime
      );

      audio.removeEventListener(
        "loadedmetadata",
        updateDuration
      );

      audio.removeEventListener(
        "ended",
        handleSongEnd
      );
    };
  }, [currentSong]);

  const formatTime = (time) => {
    if (!time) return "0:00";

    const minutes = Math.floor(time / 60);

    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const nextSong = () => {
    if (!currentSong) return;

    const currentIndex = songs.findIndex(
      (song) => song.id === currentSong.id
    );

    const nextIndex =
      (currentIndex + 1) % songs.length;

    setCurrentSong(songs[nextIndex]);
  };

  const previousSong = () => {
    if (!currentSong) return;

    const currentIndex = songs.findIndex(
      (song) => song.id === currentSong.id
    );

    const prevIndex =
      (currentIndex - 1 + songs.length) %
      songs.length;

    setCurrentSong(songs[prevIndex]);
  };

  const changeVolume = (value) => {
    setVolume(value);

    if (audioRef.current) {
      audioRef.current.volume = value;
    }
  };

  if (!currentSong) return null;

  return (
    <div className="music-player">
      <div className="song-info">
        <img
          src={currentSong.cover}
          alt={currentSong.title}
          className="song-cover"
        />

        <div>
          <div className="song-title-row">
            <h4>{currentSong.title}</h4>

            <span className="like-btn">
              ♡
            </span>
          </div>

          <p
            style={{
              color: "#b3b3b3",
            }}
          >
            {currentSong.artist}
          </p>
        </div>
      </div>

      <div className="player-center">
        <div className="controls">
          <button
            className="control-btn"
            onClick={previousSong}
          >
            ⏮
          </button>

          <button
            className="play-btn"
            onClick={togglePlayPause}
          >
            {isPlaying ? "⏸" : "▶"}
          </button>

          <button
            className="control-btn"
            onClick={nextSong}
          >
            ⏭
          </button>
        </div>

        <div className="progress-row">
          <span>
            {formatTime(currentTime)}
          </span>

          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={(e) => {
              audioRef.current.currentTime =
                e.target.value;

              setCurrentTime(
                e.target.value
              );
            }}
            style={{ flex: 1 }}
          />

          <span>
            {formatTime(duration)}
          </span>
        </div>
      </div>

      <div className="volume-section">
        <span className="volume-icon">
          🔊
        </span>

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) =>
            changeVolume(e.target.value)
          }
          style={{ flex: 1 }}
        />
      </div>

      <audio ref={audioRef}>
        <source
          src={currentSong.audio}
          type="audio/mpeg"
        />
      </audio>
    </div>
  );
}

export default MusicPlayer;