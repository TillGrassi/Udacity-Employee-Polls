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
import NotFound from "./components/NotFound";

function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <div className="App">
      {props.authedUser.id === null ? (
        <LogIn />
      ) : (
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/add" element={<NewPoll />} />
          <Route path="/questions/:id" exact element={<Pollpage />} />
          <Route path="*" element={<NotFound />} />
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
