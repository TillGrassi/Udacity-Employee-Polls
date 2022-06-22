import NavBar from "./NavBar";
import PollContainer from "./PollContainer";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Dashboard({ authedUser, questions }) {
  const [doneQuestions, setDoneQuestions] = useState([]);
  const [newQuestions, setNewQuestions] = useState([]);

  useEffect(() => {
    setDoneQuestions(
      Object.values(questions)
        .filter(
          (q) =>
            q.optionOne.votes.includes(authedUser.id) ||
            q.optionTwo.votes.includes(authedUser.id)
        )
        .sort((a, b) => b.timestamp - a.timestamp)
    );
    setNewQuestions(
      Object.values(questions)
        .filter(
          (q) =>
            !q.optionOne.votes.includes(authedUser.id) &&
            !q.optionTwo.votes.includes(authedUser.id)
        )
        .sort((a, b) => b.timestamp - a.timestamp)
    );
  }, [questions.length, authedUser]);

  return (
    <div>
      <NavBar />
      <PollContainer
        newQuestions={newQuestions}
        doneQuestions={doneQuestions}
      />
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
export default connect(mapStateToProps)(Dashboard);
