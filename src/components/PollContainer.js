import Poll from "./Poll";

function PollContainer(props) {
  return (
    <div>
      <div className="PollsContainer">
        <h4>New Questions</h4>
        <div className="PollsFlex">
          <Poll />
          <Poll />
        </div>
      </div>
      <div className="PollsContainer">
        <h4>Answered Questions</h4>
        <div className="PollsFlex">
          <Poll />
        </div>
      </div>
    </div>
  );
}
export default PollContainer;
