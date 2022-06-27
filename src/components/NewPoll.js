import NavBar from "./NavBar";
import { connect, useDispatch } from "react-redux";
import sarahedo from "../avatar/avatar1.jpg";
import tylermcginnis from "../avatar/avatar2.jpg";
import mtsamis from "../avatar/avatar3.jpg";
import zoshikanlu from "../avatar/avatar4.jpg";
import { useState } from "react";
import { handleSaveQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";

function NewPoll({ authedUser }) {
  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const newQuestion = {
    optionOneText,
    optionTwoText,
    author: authedUser.id,
  };

  function handleSubmit() {
    handleSaveQuestion(newQuestion)(dispatch);
    navigate("/");
  }

  return (
    <div>
      <NavBar />
      <div>
        <h2>Create your own poll</h2>
        {authedUser.id === "sarahedo" && <img src={sarahedo} />}
        {authedUser.id === "tylermcginnis" && <img src={tylermcginnis} />}
        {authedUser.id === "mtsamis" && <img src={mtsamis} />}
        {authedUser.id === "zoshikanlu" && <img src={zoshikanlu} />}
        <h3>Would you rather</h3>
        <div>
          <input
            className="NewOption"
            type="text"
            placeholder="Option 1"
            value={optionOneText}
            onChange={(e) => setOptionOneText(e.target.value)}
          />
          <input
            className="NewOption"
            type="text"
            placeholder="Option 2"
            value={optionTwoText}
            onChange={(e) => setOptionTwoText(e.target.value)}
          />
          {!optionOneText || !optionTwoText ? (
            <button disabled>Submit</button>
          ) : (
            <button onClick={handleSubmit}>Submit</button>
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(NewPoll);
