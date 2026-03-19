import maleImage from "../assets/images/GKP_0089.JPG";
import femaleImage from "../assets/images/GKP_0156.JPG";
import flowerImage from "../assets/images/toppng.com-pin-bunceemothers-day-flowers-01-on-pinterest-flat-design-387x732.png"
import copleCover from "../assets/images/GKP_0301.JPG";
function CoupleInfoComponent() {
  return (
    <div className="bg-cremcustom  h-200  max-md:h-430 pt-10 px-10 bg-cover bg-center" style={{ backgroundImage: `url(${copleCover})` }}>
      <div className="flex-row flex-auto text-center justify-items-center place-content-centers">
        <h1 className="text-whitecustom title text-5xl pt-2 max-sm:text-4xl">Om Swastiyastu</h1>
        <label className="block title-plex-sans  text-whitecustom pt-5">
          Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa/ Tuhan Yang
          Maha Esa, kami bermaksud mengundang Bapak/ Ibu/ Saudara/ i pada
          Upacara Manusa Yadnya Pawiwahan putra dan putri kami.
        </label>
        <div className="flex pt-10 flex-row max-md:flex-col justify-between justify-items-center">
          <div className="flex-col flex-2 justify-items-center">
            <img
              src={maleImage}
              className="w-80 h-80  rounded-full object-cover border-5 border-solid border-whitecustom drop-shadow-md/30"
            />
            <h1 className="block text-center title text-3xl font-bold text-whitecustom pt-5">
             Putu Eka Arya Suandana
            </h1>
            <label className="block text-center text-whitecustom pt-3 title-plex-sans ">
              Putra Pertama dari pasangan
            </label>
            <label className="block text-center text-whitecustom title-plex-sans ">
              I Made Pica &  Ni Made Wardani
            </label>
            <label className="block text-center text-whitecustom title-plex-sans ">
             Banjar Tegal Luwih, Perumahan Dalung Permai
            </label>
          </div>
         <div className="flex-col flex-1 justify-items-center justify-center  py-10 px-5">
            <img
              src={flowerImage}
              className="h-50  text-whitecustom"
            />
          </div>
          <div className="flex-col flex-2 justify-items-center">
            <img
              src={femaleImage}
              className="w-80 h-80 rounded-full object-cover  border-5 border-solid border-whitecustom drop-shadow-md/30"
            />
            <h1 className="block text-center title text-3xl font-bold text-whitecustom pt-5">
              Ni Komang Devi Dyanita Wiguna
            </h1>
            <label className="block text-center text-whitecustom pt-3">
              Putri Ketiga dari pasangan
            </label>
            <label className="block text-center text-whitecustom title-plex-sans ">
             I Nyoman Danta Wiguna  & Ni Made Warsini 
            </label>
            <label className="block text-center text-whitecustom title-plex-sans  ">
              Banjar Balekembar, Desa Adat Bualu
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoupleInfoComponent;
