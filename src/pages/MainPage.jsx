import { Route, useSearchParams } from "react-router-dom";
import CoupleInfoComponent from "../components/CoupleInfoComponent";
import FooterComponent from "../components/FooterComponent";
import InformationHeaderCouple from "../components/InformationHeaderCouple";
import LocationEventComponent from "../components/LocationEventComponent";
import RegWedaSacredComponent from "../components/RegWedaSacredComponent";
import '../index.css'
import CommentPage from "./CommentPage";
import { useState } from "react";
import PlaySongButtonComponent from "../components/PlaySongButtonComponent";
function MainPage(){
    const [searchParams] = useSearchParams();
    const kepada = searchParams.get("kepada") ? decodeURIComponent(searchParams.get("kepada")) : "";
    const [undanganOpen,setUndangan] = useState(false);


    return(
        <div className="min-h-screen overflow-x-hidden w-full">
            <InformationHeaderCouple kepada={kepada} undanganClick={() => setUndangan(true)}/>
            {undanganOpen &&    <PlaySongButtonComponent /> }
            {undanganOpen && <RegWedaSacredComponent />  }
            {undanganOpen && <CoupleInfoComponent /> }      
            {undanganOpen &&  <LocationEventComponent /> }    
            {undanganOpen &&  <CommentPage /> }
            {undanganOpen &&   <FooterComponent />}
    
        </div>
    )
};

export default MainPage;