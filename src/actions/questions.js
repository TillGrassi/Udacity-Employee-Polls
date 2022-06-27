import { _saveQuestion, _saveQuestionAnswer } from "../_DATA";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";
export const SAVE_QUESTION = "SAVE_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function saveQuestionAnswer({ authedUser, qid, answer }) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

export function handleSaveQuestionAnswer(data) {
  return (dispatch) => {
    _saveQuestionAnswer(data).then(() => dispatch(saveQuestionAnswer(data)));
  };
}

export function saveQuestion(question) {
  return {
    type: SAVE_QUESTION,
    question,
  };
}

export function handleSaveQuestion(data) {
  return (dispatch) => {
    _saveQuestion(data).then((question) => {
      console.log(question);
      dispatch(saveQuestion(question));
    });
  };
}
