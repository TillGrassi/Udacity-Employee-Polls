import "./App.css";
import LogIn from "./components/LogIn";
import Dashboard from "./components/Dashboard";
import Pollpage from "./components/Pollpage";
import Leaderboard from "./components/Leaderboard";
import NewPoll from "./components/NewPoll";
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { handleInitialData } from "./actions/shared";
import { Routes, Route } from "react-router-dom";

function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  return (
    <div className="App">
      {props.authedUser === null ? (
        <LogIn />
      ) : (
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/Leaderboard" element={<Leaderboard />} />
          <Route path="/NewPoll" element={<NewPoll />} />
          <Route path="/Poll/:id" element={<Pollpage />} />
        </Routes>
      )}
    </div>
  );
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(App);
