import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import middleware from "./middleware";
import { BrowserRouter } from "react-router-dom";
import { saveState, loadState } from "./saveState";

const persistedState = loadState();
const store = createStore(reducer, persistedState, middleware);

store.subscribe(() => {
  saveState({
    authedUser: store.getState().authedUser,
  });
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
