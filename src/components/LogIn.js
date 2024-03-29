import { connect } from "react-redux";
import { useState } from "react";
import { setAuthedUser } from "../actions/authedUser";
import { useNavigate, useLocation } from "react-router-dom";
import sarahedo from "../avatar/avatar1.jpg";
import tylermcginnis from "../avatar/avatar2.jpg";
import mtsamis from "../avatar/avatar3.jpg";
import zoshikanlu from "../avatar/avatar4.jpg";

const Login = ({ users, dispatch }) => {
  const location = useLocation();
  const [userPicked, setUserPicked] = useState("none");
  const navigate = useNavigate();
  const handleLogIn = (e) => {
    e.preventDefault();

    dispatch(setAuthedUser(userPicked));
    navigate(location.pathname);
  };

  return (
    <form className="LogIn">
      <h1>Select the user:</h1>
      {userPicked === "sarahedo" && <img src={sarahedo} alt="" />}
      {userPicked === "tylermcginnis" && <img src={tylermcginnis} alt="" />}
      {userPicked === "mtsamis" && <img src={mtsamis} alt="" />}
      {userPicked === "zoshikanlu" && <img src={zoshikanlu} alt="" />}
      <select
        data-testid="selectUser"
        className="LoginForm"
        onChange={(e) => setUserPicked(e.target.value)}
        value={userPicked}
      >
        <option value="none" disabled>
          Select...
        </option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>

      {userPicked === "none" ? (
        <button disabled className="LoginForm">
          Submit
        </button>
      ) : (
        <button onClick={handleLogIn} className="LoginForm">
          Submit
        </button>
      )}
    </form>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users: Object.keys(users).map(function (key) {
      return users[key];
    }),
  };
};

export default connect(mapStateToProps)(Login);
