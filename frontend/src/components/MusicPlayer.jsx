import { useState, useEffect, useRef } from "react";

function MusicPlayer({
  currentSong,
  isPlaying,
  setIsPlaying,
}) {
  const audioRef = useRef(null);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (currentSong && audioRef.current) {
      audioRef.current.load();

      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log(err);
        });
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

    audio.addEventListener(
      "timeupdate",
      updateTime
    );

    audio.addEventListener(
      "loadedmetadata",
      updateDuration
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
    };
  }, [currentSong]);

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

  const formatTime = (time) => {
    if (!time) return "0:00";

    const minutes = Math.floor(time / 60);

    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 250,
        right: 0,
        height: "90px",
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
          {/* LEFT SIDE */}
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
                width: "60px",
                height: "60px",
                objectFit: "cover",
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
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "500px",
            }}
          >
            <button
              onClick={togglePlayPause}
              style={{
                background: "#1DB954",
                border: "none",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                cursor: "pointer",
                fontSize: "18px",
                marginBottom: "8px",
              }}
            >
              {isPlaying ? "⏸" : "▶"}
            </button>

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

          {/* RIGHT SIDE */}
          <div
            style={{
              width: "150px",
              textAlign: "right",
            }}
          >
            🎵 Playing
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