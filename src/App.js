import "./App.css";
import LogIn from "./components/LogIn";
import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <div className="App">
      <LogIn />
    </div>
  );
}

export default connect()(App);
