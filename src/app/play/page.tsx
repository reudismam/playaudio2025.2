'use client'

import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import musics from "../data/data";
import Image from "next/image";

export default function Play() {
  const [audio, setAudio] = useState<HTMLAudioElement>();
  const [playing, isPlaying] = useState<boolean>(false);
  const [gain, setGain] = useState<GainNode>();
  const [volume, setVolume] = useState<number>(1);
  const [audioIndex, setAudioIndex] = useState<number>(0);
  useEffect(()=>{
    configAudio(0);
  }, []);

  useEffect(() => {
      if  (playing) {
        play()
      }
  }, [audio])

  const configVolume = (newValue: number) => {
    if (gain) {
      gain.gain.value = newValue;
    }
    setVolume(newValue);
  }
  
  const configAudio = (index:number) => {
    const newIndex = index % musics.length;
    const newAudio = new Audio(musics[index].url);  
    pause();
    setAudioIndex(newIndex);
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
      <div>
        {
          musics.map((music, index) => {
              return (
                <div key={index} onClick={e => configAudio(index)}>
                  <Image 
                     alt={"Áudio 1"}
                     src={music.image}
                     width={180}
                     height={36}
                  />
                 <h1 className="text-center"> {music.name} </h1>
                </div>
              )
          })
        }
      </div>
      
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

      <div>
        <h1>{`Musica tocando: ${musics[audioIndex].name}`}</h1>
      </div>
     </div>
  );
}
