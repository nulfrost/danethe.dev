import { useEffect, useState } from "react";

export const Footer = () => {
  const [currentSong, setCurrentSong] = useState<any>({});

  useEffect(() => {
    const getCurrentSong = async () => {
      const response = await fetch(`${window.location.href}api/spotify`);
      const data = await response.json();
      setCurrentSong(data);
    };
    getCurrentSong();
  }, []);

  return (
    <footer className="flex justify-end pb-6">
      <div className="truncate">
        <span className="font-bold">Spotify</span> -{" "}
        <span className="max-w-max text-grayish">
          {!currentSong.isPlaying
            ? "Not playing"
            : `${currentSong.title} by ${currentSong.artist}`}
        </span>
      </div>
    </footer>
  );
};