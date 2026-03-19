import { IoCalendarOutline } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import copleCover from "../assets/images/GKP_0185.JPG";
function LocationEventComponent() {
  function openLocationMap() {
    window.open(`https://maps.app.goo.gl/fxFMyNjj1cjTjHQQ6`)
  }
  return (
    <div className="h-270 pt-20 pb-35  bg-[position:center_55%] bg-cover flex flex-col  items-center justify-center"      
     style={{ backgroundImage: `url(${copleCover})` }}>
      <div className="justify-items-center">
        <h1 className="text-whitecustom title text-5xl pt-10 max-sm:text-3xl">Jadwal Acara</h1>
        <div class="w-full h-px bg-white my-6"></div>
      </div>
      <div className="text-center flex flex-col px-30 gap-x-10">
        <div className="justify-items-center place-content-centers text-center shadow-sm  p-6 mt-15 border-whitecustom border-3 rounded-lg w-180  max-md:w-150 max-sm:w-80 max-sm:h-85 h-80 drop-shadow-md/30 ">
          <IoCalendarOutline className="text-center text-5xl text-whitecustom" />
          <h1 className="block text-center title-plex-sans text-2xl font-bold text-whitecustom pt-3">
            Memadik
          </h1>
          <label className="text-center text-whitecustom flex pt-3">
            <IoCalendarOutline className="text-center text-whitecustom mr-2 mt-1" />{" "}
            13 April 2026
          </label>
          <label className="text-center text-whitecustom flex pt-3">
            <FaClock className="text-center text-whitecustom mr-2 mt-1" /> 08:00
            - 12:00 WITA
          </label>
          <label className="text-center text-whitecustom flex pt-3">
            <FaLocationDot className="text-center text-whitecustom mr-2 mt-1" />{" "}
            Jalan Pratama Gg. Badak No 3,Benoa
          </label>
           <button className="text-center flex border-whitecustom border-3 text-whitecustom px-8 py-2 mt-4  rounded-4xl drop-shadow-md/25" onClick={openLocationMap}>
           Bukak Lokasi <FaLocationDot  className="justify-self-end ml-2 mt-1"/>
           </button>
        </div>
        <div className="justify-items-center place-content-center text-center shadow-sm p-2 mt-15 border-whitecustom border-3 rounded-lg w-180 h-80 max-md:w-150 max-sm:w-80 rop-shadow-md/30">
        <iframe
            src="https://www.google.com/maps?q=-8.782631814471452, 115.22387915915101&z=17&output=embed"
            style={{ border: 0, width: "100%", height: "100%" }}
            allowFullScreen
            loading="lazy"
        />
        </div>
      </div>
    </div>
  );
}

export default LocationEventComponent;
