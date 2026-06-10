import believerAudio from "./assets/songs/believer.mp3";
import blindingLightsAudio from "./assets/songs/blinding_lights.mp3";
import starboyAudio from "./assets/songs/starboy.mp3";

import believerCover from "./assets/albums/believer.jpg";
import blindingLightsCover from "./assets/albums/blinding_lights.jpg";
import starboyCover from "./assets/albums/starboy.jpg";

const songs = [
  {
    id: 1,
    title: "Believer",
    artist: "Imagine Dragons",
    cover: believerCover,
    audio: believerAudio,
  },
  {
    id: 2,
    title: "Blinding Lights",
    artist: "The Weeknd",
    cover: blindingLightsCover,
    audio: blindingLightsAudio,
  },
  {
    id: 3,
    title: "Starboy",
    artist: "The Weeknd",
    cover: starboyCover,
    audio: starboyAudio,
  },
];

export default songs;