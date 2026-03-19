import { addComment, getComments } from "../../firebase/commetService";

const ActionType = {
  CREATE_COMMENT: "CREATE_COMMENT",
  GET_ALL_COMMENT: "GET_ALL_COMMENT",
};


function getAllCommentActionCreator(comments) {
  return {
    type: ActionType.GET_ALL_COMMENT,
    payload: {
      comments,
    },
  };
}

function asyncCreateComment({ message, name }) {
  return async (dispatch) => {
    try {

       await addComment( {name,message });
      const getCommentsAll = await getComments();
      dispatch(getAllCommentActionCreator(getCommentsAll));
    } catch (error) {
            console.log(error,"error")
      alert(error.message);
    }
  };
}

function asyncGetAllComment() {
  return async (dispatch) => {
    try {

      const getCommentsAll = await getComments();
      dispatch(getAllCommentActionCreator(getCommentsAll));
    } catch (error) {
        console.log(error,"error")
      alert(error.message);
    }
  };
}

export {
  ActionType,
  asyncCreateComment,
  asyncGetAllComment,
};
