import Poll from "./Poll";

function PollContainer({ newQuestions, doneQuestions }) {
  return (
    <div>
      <div className="PollsContainer">
        <h4>New Questions</h4>
        <div className="PollsFlex">
          {newQuestions.map((question) => (
            <Poll key={question.id} question={question} />
          ))}
        </div>
      </div>
      <div className="PollsContainer">
        <h4>Answered Questions</h4>
        <div className="PollsFlex">
          {doneQuestions.map((question) => (
            <Poll key={question.id} question={question} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default PollContainer;
