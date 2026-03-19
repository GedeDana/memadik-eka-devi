import { useDispatch, useSelector } from "react-redux";
import CreateCommentComponent from "../components/CreateCommentComponent";
import { useEffect } from "react";
import {
  asyncCreateComment,
  asyncGetAllComment,
} from "../states/comment/action";
import CommentItemComponent from "../components/CommentItemComponent";
import copleCover from "../assets/images/GKP_0437.JPG";

function CommentPage() {
  const { comments = [] } = useSelector((states) => states);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncGetAllComment());
  }, [dispatch]);

  const createComment = (name, message) => {
    dispatch(asyncCreateComment({ message, name }));
  };
  let loopComments = [];
  if (comments != null) {
    loopComments = [...comments, ...comments];
  }

  return (
    <div
      className="h-250 max-sm:h-280 pt-10  bg-[position:center_50%] bg-cover flex flex-col"
      style={{ backgroundImage: `url(${copleCover})` }}
    >
      <CreateCommentComponent createComment={createComment} />
      {loopComments.length > 0 && (
        <div className="flex flex-col marquee-container mt-10 pt-10 pb-10 bg-black/20 rounded-lg">
          <label className="text-whitecustom text-center text-2xl pb-8">Daftar Ucapan</label>
          <div className="marquee-track flex flex-row gap-x-10 overflow-hidden" >
            {loopComments.map((comment, i) => (
              <CommentItemComponent key={i} comment={comment} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CommentPage;
