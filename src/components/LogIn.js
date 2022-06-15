import { connect } from "react-redux";
import { useState } from "react";

const Login = ({ users }) => {
  const [userPicked, setUserPicked] = useState("none");
  console.log(users);

  function handleChange() {}

  return (
    <div>
      <h1>Select the user:</h1>
      <select
        onChange={handleChange}
        value={(e) => setUserPicked(e.target.value)}
      >
        <option value="none">Select...</option>
        {users.map((user) => (
          <option value={user.id}>
            <img src={user.avatar} />
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { users: state.users };
};

export default connect(mapStateToProps)(Login);
