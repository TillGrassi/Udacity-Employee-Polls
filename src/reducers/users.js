import { SAVE_QUESTION_ANSWER, SAVE_QUESTION } from "../actions/questions";
import { RECEIVE_USERS } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case SAVE_QUESTION_ANSWER:
      const { authedUser, qid, answer } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer,
          },
        },
      };
    case SAVE_QUESTION:
      const { author, id } = action.question;
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: [...state[author].questions, id],
        },
      };
    default:
      return state;
  }
}
