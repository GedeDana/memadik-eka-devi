import { GiCottonFlower } from "react-icons/gi";
import gradientwhiteblack from "../assets/images/GKP_0540.JPG";

function RegWedaSacredComponent() {
  return (
    <div
      className="h-90 py-10  bg-[position:center_45%] bg-cover flex  items-center justify-center"
      style={{ backgroundImage: `url(${gradientwhiteblack})` }}
    >
      <div className="text-center max-w-xl px-6">
        <GiCottonFlower className="text-white text-6xl mx-auto" />

        <i className="block text-white pt-6 leading-relaxed">
          “Aku mengambil tanganmu demi kebahagiaan, agar kita mencapai usia tua
          bersama. Para dewa telah memberikanmu kepadaku untuk menjalani
          kehidupan sebagai pasangan.”
        </i>

        <label className="block font-bold text-white pt-4">
          Rg Veda 10.85
        </label>
      </div>
    </div>
  );
}

export default RegWedaSacredComponent;