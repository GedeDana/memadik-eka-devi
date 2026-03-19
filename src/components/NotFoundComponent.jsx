import kagetImage from "../assets/images/Jokowi_Kaget.gif";
function NotFoundComponent(){
    return(
        <div className="h-screen  bg-[position:center_95%] bg-cover" style={{ backgroundImage: `url(${kagetImage})` }}>
        </div>
    )
};
export default NotFoundComponent;