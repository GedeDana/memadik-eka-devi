import defaulPhoto from "../assets/images/Twitter_default_profile_400x400.png";
import { IoMdTime } from "react-icons/io";
import { changeFormatDateStatusThread } from "../utils/helper";
function CommentItemComponent({ comment }) {
   const statusCreateComment = changeFormatDateStatusThread(comment.createdAt);
  return (
    <div className="max-sm:w-100 flex-col  shadow-sm p-2 mt-4 border-whitecustom border-3 rounded-lg w-screen h-63 drop-shadow-md/30 max-sm:pb-70">
      <div className="flex flex-row pl-5 pt-5 break-all">
        <div className="">
          <img
            src={defaulPhoto}
            className="w-15 h-15 rounded-full object-cover justify border-3 border-solid border-whitecustom drop-shadow-md/30"
          />
        </div>
        <div className="pl-4 pt-3">
          <label className="text-2xl text-whitecustom">{comment.name}</label>
        </div>
      </div>
      <div className="flex pl-4 pt-5 text-whitecustom/80">
         <IoMdTime  className="pl-2 text-2xl"/>
          <label className="pl-2 text-sm"> {statusCreateComment}</label>
        </div>
      <p className="px-5 pt-2  text-whitecustom break-all text-balance">{comment.comment}</p>
    </div>
  );
}
export default CommentItemComponent;
