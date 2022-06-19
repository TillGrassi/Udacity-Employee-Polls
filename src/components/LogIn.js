import { connect } from "react-redux";
import { useState } from "react";
import { setAuthedUser } from "../actions/authedUser";
import sarahedo from "../avatar/avatar1.jpg";
import tylermcginnis from "../avatar/avatar2.jpg";
import mtsamis from "../avatar/avatar3.jpg";
import zoshikanlu from "../avatar/avatar4.jpg";

const Login = ({ users, dispatch }) => {
  const [userPicked, setUserPicked] = useState("none");
  const handleLogIn = (e) => {
    e.preventDefault();

    dispatch(setAuthedUser(userPicked));
  };

  return (
    <form className="LogIn">
      <h1>Select the user:</h1>
      {userPicked === "sarahedo" && <img src={sarahedo} />}
      {userPicked === "tylermcginnis" && <img src={tylermcginnis} />}
      {userPicked === "mtsamis" && <img src={mtsamis} />}
      {userPicked === "zoshikanlu" && <img src={zoshikanlu} />}
      <select
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
      <input
        type="password"
        placeholder="password"
        className="LoginForm"
        required
      />
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
