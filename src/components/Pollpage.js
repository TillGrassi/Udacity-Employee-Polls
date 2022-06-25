import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Pollview from "./Pollview";

function Pollpage({ questions }) {
  const location = useLocation();
  const questionData = questions.filter(
    (q) => q.id === location.pathname.slice(6)
  );
  const [questionDataObj] = questionData;
  return (
    <div>
      <NavBar />
      {questionDataObj && <Pollview question={questionDataObj} />}
    </div>
  );
}

const mapStateToProps = ({ questions }) => {
  return {
    questions: Object.keys(questions).map(function (key) {
      return questions[key];
    }),
  };
};

export default connect(mapStateToProps)(Pollpage);
