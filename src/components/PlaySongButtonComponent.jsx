
import { FaMusic } from "react-icons/fa";
import { FaVolumeMute } from "react-icons/fa";
import weddingSong from "../assets/audio/videoplayback.m4a";
import { useEffect, useRef, useState } from "react";

function PlaySongButtonComponent(){
 const audioRef = useRef(null);
 const [isMuted , setIsMuted] = useState(false);

   useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // 60%
    }
  }, []);
 const toogleMute = () =>{
    if (!audioRef.current) return;

    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
 }

 return(
    <div className="fixed  bottom-5 right-5 z-50">
        <audio ref={audioRef} loop autoPlay>
            <source src={weddingSong} type="audio/mp4" />
        </audio>
        <button className="bg-white  p-4 rounded-full" onClick={() => toogleMute()}>
           {isMuted ? (
            <FaVolumeMute  className="text-black text-2xl"/>
           ) : (
            <FaMusic  className="text-black text-2xl"/>
           )}

        </button>
    </div>
 )
};

export default PlaySongButtonComponent;