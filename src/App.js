import "./App.css";
import LogIn from "./components/LogIn";
import Dashboard from "./components/Dashboard";
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { handleInitialData } from "./actions/shared";

function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  return (
    <div className="App">
      {props.authedUser === null ? <LogIn /> : <Dashboard />}
    </div>
  );
}

const mapStateToProps = ({ authedUser }) => {
  console.log(authedUser);
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(App);
