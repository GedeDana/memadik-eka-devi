import { useEffect, useState } from "react";
import { countDownDate } from "../utils/helper";
import { IoHeartCircleOutline } from "react-icons/io5";
import copleCover from "../assets/images/GKP_0596.jpg";
function InformationHeaderCouple({kepada, undanganClick}) {
  const [timeLeft, setTimeLeft] = useState(countDownDate("2026-04-13"));

  useEffect(() => {
    const inteval = setInterval(() => {
      setTimeLeft(countDownDate("2026-04-13"));
    }, 1000);
    return () => clearInterval(inteval);
  }, []);


  return (
    <div className="h-screen  py-10  bg-cover bg-center max-sm:bg-fill max-sm:bg-no-repeat flex  items-center justify-center " style={{ backgroundImage: `url(${copleCover})` }}>
      <div className="flex:row  flex-auto justify-items-center place-content-centers  max-sm:scale-70 max-sm:p-10">
        <h2 className="text-whitecustom title-plex-sans text-2xl pt-3">Undangan Memadik </h2>
        <h1 className="text-whitecustom title text-6xl pt-10">Eka & Devi</h1>
        <p className="text-whitecustom title-plex-sans text-inline pt-4">Kpd Bpk/Ibu/Saudara/i</p>
        <h1 className="text-whitecustom title text-3xl pt-5">{kepada}</h1>
        <h1 className="text-whitecustom  title-plex-sans text-2xl pt-5">13 April 2026</h1>
        <div className="flex pt-10 gap-x-6">
            <div className="flex:col rounded-md px-7 border-3  py-5 drop-shadow-md/25 border-whitecustom">
                <label className="block text-center title-plex-sans  font-bold text-whitecustom">Hari</label>
                <label className="block text-center title-plex-sans text-whitecustom">{timeLeft.days}</label>
            </div>
            <div className="flex:col rounded-md px-7 border-3  py-5 drop-shadow-md/25 border-whitecustom">
                <label className="block text-center title-plex-sans  font-bold text-whitecustom">Jam</label>
                <label className="block text-center title-plex-sans text-whitecustom">{timeLeft.hours}</label>
            </div>
            <div className="flex:col rounded-md px-7 border-3  py-5 drop-shadow-md/25 border-whitecustom">
                <label className="block text-center title-plex-sans  font-bold text-whitecustom">Menit</label>
                <label className="block text-center title-plex-sans text-whitecustom">{timeLeft.minutes}</label>
            </div>
                <div className="flex:col rounded-md px-7 border-3  py-5 drop-shadow-md/25 border-whitecustom">
                <label className="block text-center title-plex-sans  font-bold text-whitecustom">Detik</label>
                <label className="block text-center title-plex-sans text-whitecustom">{timeLeft.seconds}</label>
            </div>
        </div>
        <button className="block border-whitecustom border-3 text-whitecustom px-10 py-5 mt-30 rounded-4xl drop-shadow-md/25 title-plex-sans cursor-pointer" onClick={() => undanganClick()}>Buka Undangan</button>
      </div>
    </div>
  );
}

export default InformationHeaderCouple;
