import { connect } from "react-redux";
import sarahedo from "../avatar/avatar1.jpg";
import tylermcginnis from "../avatar/avatar2.jpg";
import mtsamis from "../avatar/avatar3.jpg";
import zoshikanlu from "../avatar/avatar4.jpg";

function NavBar({ authedUser }) {
  console.log("navbar user", authedUser);
  return (
    <ul className="Navbar">
      <li className="NavLeft">
        <a className="NavLink">Home</a>
      </li>
      <li className="NavLeft">
        <a className="NavLink">LeaderBoard</a>
      </li>
      <li className="NavLeft">
        <a className="NavLink">New</a>
      </li>
      <li className="NavRight">
        <a className="NavLink">Logout</a>
      </li>
      <li className="NavRight NavLink">{authedUser.id}</li>
      <li className="NavRight">
        {authedUser.id === "sarahedo" && (
          <img src={sarahedo} className="NavAvatar" />
        )}
        {authedUser.id === "tylermcginnis" && (
          <img src={tylermcginnis} className="NavAvatar" />
        )}
        {authedUser.id === "mtsamis" && (
          <img src={mtsamis} className="NavAvatar" />
        )}
        {authedUser.id === "zoshikanlu" && (
          <img src={zoshikanlu} className="NavAvatar" />
        )}
      </li>
    </ul>
  );
}

const mapStateToProps = ({ authedUser }) => {
  console.log(authedUser);
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(NavBar);
