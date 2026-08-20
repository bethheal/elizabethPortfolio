import { useRef, useState } from "react";
import { FaMusic, FaVolumeMute } from "react-icons/fa";
import music from "../assets/music/portfolio-music.mp3";

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.volume = 0.2;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={music} loop />

      <button
        onClick={toggleMusic}
        className=" bottom-6 right-6 z-50 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/10 text-orange-500 backdrop-blur-xl transition hover:scale-110"
        aria-label={isPlaying ? "Mute music" : "Play music"}
      >
        {isPlaying ? <FaMusic /> : <FaVolumeMute />}
      </button>
    </>
  );
};

export default BackgroundMusic;