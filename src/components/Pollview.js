import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { handleSaveQuestionAnswer } from "../actions/questions";
import sarahedo from "../avatar/avatar1.jpg";
import tylermcginnis from "../avatar/avatar2.jpg";
import mtsamis from "../avatar/avatar3.jpg";
import zoshikanlu from "../avatar/avatar4.jpg";

function Pollview({ question, authedUser }) {
  const dispatch = useDispatch();
  const [chosenOption, setChosenOption] = useState({
    optionOne: "none",
    optionTwo: "none",
  });

  const percentageOne = () => {
    return (
      (question.optionOne.votes.length /
        (question.optionOne.votes.length + question.optionTwo.votes.length)) *
      100
    ).toFixed(2);
  };
  const percentageTwo = () => {
    return (
      (question.optionTwo.votes.length /
        (question.optionOne.votes.length + question.optionTwo.votes.length)) *
      100
    ).toFixed(2);
  };

  const answerOne = {
    authedUser: authedUser.id,
    qid: question.id,
    answer: "optionOne",
  };
  const saveAnswerOne = () => {
    handleSaveQuestionAnswer(answerOne)(dispatch);
  };

  const answerTwo = {
    authedUser: authedUser.id,
    qid: question.id,
    answer: "optionTwo",
  };
  const saveAnswerTwo = () => {
    handleSaveQuestionAnswer(answerTwo)(dispatch);
  };

  useEffect(() => {
    if (question.optionOne.votes.includes(authedUser.id)) {
      setChosenOption({ optionOne: "chosen" });
    }
    if (question.optionTwo.votes.includes(authedUser.id)) {
      setChosenOption({ optionTwo: "chosen" });
    }
  }, [question]);

  return (
    <div>
      <h3>Poll by:</h3>
      {question.author === "sarahedo" && <img src={sarahedo} />}
      {question.author === "tylermcginnis" && <img src={tylermcginnis} />}
      {question.author === "mtsamis" && <img src={mtsamis} />}
      {question.author === "zoshikanlu" && <img src={zoshikanlu} />}
      <p>{question.author}</p>
      <h3>Would you rather</h3>
      <ul className="PollviewList">
        <li className={`PollviewOptions ${chosenOption.optionOne}`}>
          {question.optionOne.text}
          {chosenOption.optionOne === "chosen" ||
          chosenOption.optionTwo === "chosen" ? (
            <>
              <p>Answers: {question.optionOne.votes.length}</p>
              <div className="Progress">
                <div
                  className="ProgressBar"
                  style={{ width: `${percentageOne()}%` }}
                >
                  {percentageOne()}%
                </div>
              </div>
            </>
          ) : (
            <button className="PollviewButton" onClick={saveAnswerOne}>
              Choose
            </button>
          )}
        </li>
        <li className={`PollviewOptions ${chosenOption.optionTwo}`}>
          {question.optionTwo.text}
          {chosenOption.optionOne === "chosen" ||
          chosenOption.optionTwo === "chosen" ? (
            <>
              <p>Answers: {question.optionTwo.votes.length}</p>
              <div className="Progress">
                <div
                  className="ProgressBar"
                  style={{ width: `${percentageTwo()}%` }}
                >
                  {percentageTwo()}%
                </div>
              </div>
            </>
          ) : (
            <button className="PollviewButton" onClick={saveAnswerTwo}>
              Choose
            </button>
          )}
        </li>
      </ul>
    </div>
  );
}

const mapStateToProps = ({ authedUser, questions }) => {
  return {
    questions: Object.keys(questions).map(function (key) {
      return questions[key];
    }),
    authedUser,
  };
};

export default connect(mapStateToProps)(Pollview);
