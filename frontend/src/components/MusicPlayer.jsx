import { useState, useEffect, useRef } from "react";

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
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => console.log(err));
    }
  }, [currentSong, setIsPlaying]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const updateDuration = () => {
      setDuration(audio.duration);
    };

    const handleSongEnd = () => {
      nextSong();
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleSongEnd);

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

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 250,
        right: 0,
        height: "110px",
        boxShadow:
          "0px -5px 15px rgba(0,0,0,0.3)",
        backgroundColor: "#181818",
        borderTop: "1px solid #333",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 25px",
      }}
    >
      {currentSong ? (
        <>
          {/* LEFT */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              width: "250px",
            }}
          >
            <img
              src={currentSong.cover}
              alt={currentSong.title}
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "8px",
                boxShadow:
                  "0px 5px 20px rgba(0,0,0,0.5)",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />

            <div>
              <h4>{currentSong.title}</h4>

              <p
                style={{
                  color: "gray",
                }}
              >
                {currentSong.artist}
              </p>
            </div>
          </div>

          {/* CENTER */}
          <div
            style={{
              width: "550px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "15px",
                alignItems: "center",
              }}
            >
              <button
                onClick={previousSong}
                style={{
                  background: "transparent",
                  color: "white",
                  border: "none",
                  fontSize: "22px",
                  cursor: "pointer",
                }}
              >
                ⏮
              </button>

              <button
                onClick={togglePlayPause}
                style={{
                  background: "#1DB954",
                  border: "none",
                  width: "60px",
                  height: "60px",
                  boxShadow:
                    "0px 5px 20px rgba(29,185,84,0.5)",
                  borderRadius: "50%",
                  cursor: "pointer",
                  fontSize: "18px",
                }}
              >
                {isPlaying ? "⏸" : "▶"}
              </button>

              <button
                onClick={nextSong}
                style={{
                  background: "transparent",
                  color: "white",
                  border: "none",
                  fontSize: "30px",
                  cursor: "pointer",
                }}
              >
                ⏭
              </button>
            </div>

            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
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
                style={{
                  flex: 1,
                }}
              />

              <span>
                {formatTime(duration)}
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div
            style={{
              width: "200px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span>🔊</span>

            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) =>
                changeVolume(e.target.value)
              }
            />
          </div>

          <audio ref={audioRef}>
            <source
              src={currentSong.audio}
              type="audio/mpeg"
            />
          </audio>
        </>
      ) : (
        <p>Select a song</p>
      )}
    </div>
  );
}

export default MusicPlayer;