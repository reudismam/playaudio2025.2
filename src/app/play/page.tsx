'use client'

import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
export default function Play() {
  const [audio, setAudio] = useState<HTMLAudioElement>();
  const [playing, isPlaying] = useState<boolean>(false);
  const [gain, setGain] = useState<GainNode>();
  const [volume, setVolume] = useState<number>(1);

  useEffect(()=>{
    configAudio("./audios/audio1.mp3");
  }, []);

  const configVolume = (newValue: number) => {
    if (gain) {
      gain.gain.value = newValue;
    }
    setVolume(newValue);
  }
  
  const configAudio = (url: string) => {
    const newAudio = new Audio(url);  
    setAudio(newAudio);

    const audioContext = new AudioContext();
    const media = audioContext.createMediaElementSource(newAudio);
    const newGanho = audioContext.createGain();
    media.connect(newGanho);
    newGanho.connect(audioContext.destination);
    setGain(newGanho);
  }

  const playPause = () => {
    if (playing) {
      pause();
    }
    else {
      play();
    }
    isPlaying(!playing);
  }

  const play = () => {
    if (audio) {
      audio.play();
    }
  }

  const pause = () => {
    if (audio) {
      audio.pause();
    }
  }
  return (
     <div className="flex h-[100vh] flex-col items-center justify-center">
      <button onClick={e => playPause()}>
         {
          playing ? 
             <FaPause className="text-blue-400"/>
             : <FaPlay className="text-blue-400"/>
         }
      </button>
      <div>
        <input 
        type="range" 
         min={0}
         max={1}
         value={volume}
         step={0.001}
         onChange={e=> configVolume(Number(e.target.value))}
        />
      </div>

     </div>
  );
}
