import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeAuthedUser } from "../actions/authedUser";
import sarahedo from "../avatar/avatar1.jpg";
import tylermcginnis from "../avatar/avatar2.jpg";
import mtsamis from "../avatar/avatar3.jpg";
import zoshikanlu from "../avatar/avatar4.jpg";

function NavBar({ authedUser }) {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(removeAuthedUser());
  };
  return (
    <ul className="Navbar">
      <li className="NavLeft">
        <Link to="/" className="NavLink Link">
          Home
        </Link>
      </li>
      <li className="NavLeft">
        <Link to="/leaderboard" className="NavLink Link">
          LeaderBoard
        </Link>
      </li>
      <li className="NavLeft">
        <Link to="/add" className="NavLink Link">
          New
        </Link>
      </li>
      <li className="NavRight">
        <a onClick={handleLogout} className="NavLink">
          Logout
        </a>
      </li>
      <li className="NavRight NavLink">{authedUser.id}</li>
      <li className="NavRight">
        {authedUser.id === "sarahedo" && (
          <img src={sarahedo} alt="" className="NavAvatar" />
        )}
        {authedUser.id === "tylermcginnis" && (
          <img src={tylermcginnis} alt="" className="NavAvatar" />
        )}
        {authedUser.id === "mtsamis" && (
          <img src={mtsamis} alt="" className="NavAvatar" />
        )}
        {authedUser.id === "zoshikanlu" && (
          <img src={zoshikanlu} alt="" className="NavAvatar" />
        )}
      </li>
    </ul>
  );
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(NavBar);
