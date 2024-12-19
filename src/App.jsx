import { useState, useRef, useMemo } from 'react'
import downloadIcon from "./assets/download-icon.svg"


function App() {
  const audioRef = useRef(null);
  const [currentSong, setCurrentSong] = useState(null);

  const songs = [
    { title: "10-13-24", src: "/music/demo-songs/10-13-24.m4a" },
    { title: "10-15-24", src: "/music/demo-songs/10-15-24.m4a" },
    { title: "11-10-24", src: "/music/demo-songs/11-10-24.m4a" }
  ]

  const play = (songSrc) => {
    console.log(songSrc)
    setCurrentSong(songSrc);
    if (audioRef.current) {
      // audioRef.current.load();
      audioRef.current.src = songSrc;
      audioRef.current.play();
    }
  };

  const songList = useMemo(() => songs.map((song, index) => (
    <li key={index}>
      <button
        onClick={() => play(song.src)}
        aria-label={`Play ${song.title}`}
        className="rounded-full bg-purple-500 py-2 px-4 mb-2"
      >
        {song.title}</button>
    </li>
  )), songs)

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-neutral-900 to-purple-950">
        <audio ref={audioRef} controls className="w-full max-w-md p-2 bg-neutral-500 rounded-lg shadow-lg">
          {currentSong && <source src={currentSong} type="audio/m4a" />}
        </audio>
        <ul className="m-4">
          {songList}
        </ul>
        <a href="https://drive.google.com/uc?export=download&id=17Fya3ptjK_tWekuu4IUzb6fUnpzeXrwR" target="_blank" rel="noopener noreferrer" className="flex flex-row text-white underline">
          Download wav .zip
          <img src={downloadIcon} alt="Download icon" className="mx-2" />
        </a>
      </div>
    </>
  )
}

export default App

//https://drive.google.com/file/d/17Fya3ptjK_tWekuu4IUzb6fUnpzeXrwR/view?usp=drive_link