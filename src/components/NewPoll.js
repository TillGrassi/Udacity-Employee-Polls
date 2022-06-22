import NavBar from "./NavBar";
import { connect } from "react-redux";
import sarahedo from "../avatar/avatar1.jpg";
import tylermcginnis from "../avatar/avatar2.jpg";
import mtsamis from "../avatar/avatar3.jpg";
import zoshikanlu from "../avatar/avatar4.jpg";

function NewPoll({ authedUser }) {
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
            required
          />
          <input
            className="NewOption"
            type="text"
            placeholder="Option 2"
            required
          />
        </div>
        <button>Submit</button>
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
