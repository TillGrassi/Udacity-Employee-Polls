import NavBar from "./NavBar";
import PollContainer from "./PollContainer";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Dashboard({ authedUser, questions }) {
  const [doneQuestions, setDoneQuestions] = useState([]);
  const [newQuestions, setNewQuestions] = useState([]);

  useEffect(() => {
    console.log(
      questions.filter((q) => q.optionOne.votes.includes("sarahedo"))
    );
    setDoneQuestions(
      Object.values(questions)
        .filter(
          (q) =>
            q.optionOne.votes.includes("sarahedo") ||
            q.optionTwo.votes.includes("sarahedo")
        )
        .sort((a, b) => b.timestamp - a.timestamp)
    );
    console.log("doneQuestions: ", doneQuestions);
    /* setNewQuestions(
      questions
        .filter(
          (q) =>
            !q.optionOne.votes.includes(authedUser) ||
            !q.optionTwo.votes.includes(authedUser)
        )
        .sort((a, b) => b.timestamp - a.timestamp)
    );*/
  }, []);

  return (
    <div>
      <NavBar />
      <PollContainer />
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
