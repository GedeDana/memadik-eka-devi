import { ActionType } from "./action";

function commentReducer(comment = null, action = {}) {
    switch(action.type){
        case ActionType.GET_ALL_COMMENT:
            return action.payload.comments;
       default:
        return comment;
    }
}
export default commentReducer