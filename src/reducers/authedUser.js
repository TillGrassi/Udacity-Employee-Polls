import { SET_AUTHED_USER, REMOVE_AUTHED_USER } from "../actions/authedUser";

export default function authedUser(state = { id: null }, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return {
        id: action.id,
      };
    case REMOVE_AUTHED_USER:
      return {
        id: action.id,
      };
    default:
      return state;
  }
}
