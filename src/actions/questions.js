import { _saveQuestionAnswer } from "../_DATA";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function saveQuestionAnswer({ authedUser, qid, answer }) {
  console.log("state dispatch");
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

export function handleSaveQuestionAnswer(data) {
  console.log("fired", data);
  return (dispatch) => {
    _saveQuestionAnswer(data).then(dispatch(saveQuestionAnswer(data)));
  };
}
