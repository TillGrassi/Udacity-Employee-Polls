import sarahedo from "../avatar/avatar1.jpg";
import tylermcginnis from "../avatar/avatar2.jpg";
import mtsamis from "../avatar/avatar3.jpg";
import zoshikanlu from "../avatar/avatar4.jpg";

function Pollview({ question }) {
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
        <li className="PollviewOptions">
          {question.optionOne.text}
          <button>Choose</button>
        </li>
        <li className="PollviewOptions">
          {question.optionTwo.text}
          <button>Choose</button>
        </li>
      </ul>
    </div>
  );
}
export default Pollview;
