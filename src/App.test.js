import * as React from "react";
import Leaderboard from "./components/Leaderboard";
import App from "./App";
import LogIn from "./components/LogIn";
import NavBar from "./components/NavBar";
import { render, fireEvent, cleanup, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createLoggedInTestStore, createTestStore } from "./testUtils";
import { BrowserRouter } from "react-router-dom";

const { _saveQuestion, _saveQuestionAnswer } = require("./_DATA");
let loggedInStore;
let store;
beforeEach(() => {
  store = createTestStore();
  loggedInStore = createLoggedInTestStore();
  cleanup();
});

describe("saving Question", () => {
  it("will return the new question", async () => {
    const question = {
      optionOneText: "Test One",
      optionTwoText: "Test Two",
      author: "sarahedo",
    };
    const result = await _saveQuestion(question);
    expect(result.author).toEqual("sarahedo");
    expect(result.optionOne.text).toEqual("Test One");
    expect(result.optionTwo.text).toEqual("Test Two");
  });
  it("will throw an error when wrong formatted data are given", async () => {
    const question = {
      optionOneText: "Test One",
      optionTwoText: "Test Two",
    };
    try {
      await _saveQuestion(question);
    } catch (e) {
      (e) =>
        expect(e).toEqual(
          "Please provide optionOneText, optionTwoText, and author"
        );
    }
  });
});

describe("saving Question Answer", () => {
  it("saves the correct data at the correct places", async () => {
    const data = {
      authedUser: "sarahedo",
      qid: "vthrdm985a262al8qx3do",
      answer: "optionOne",
    };
    const result = await _saveQuestionAnswer(data);
    expect(result).toEqual(true);
  });
  it("throws an error when given incorrectly formatted data", async () => {
    const data = {
      authedUser: "sarahedo",
      qid: "vthrdm985a262al8qx3do",
    };
    try {
      await _saveQuestionAnswer(data);
    } catch (e) {
      expect(e).toEqual("Please provide authedUser, qid, and answer");
    }
  });
});

describe("Leaderboard", () => {
  it("will match snapshot", () => {
    const component = render(
      <BrowserRouter>
        <Provider store={store}>
          <Leaderboard />
        </Provider>
      </BrowserRouter>
    );
    expect(component).toMatchSnapshot();
  });
});

describe("LogInPage", () => {
  it("will match snapshot", () => {
    const component = render(
      <BrowserRouter>
        <Provider store={store}>
          <LogIn />
        </Provider>
      </BrowserRouter>
    );
    expect(component).toMatchSnapshot();
  });
});

describe("login page works as expected", () => {
  it("shows all the input fields on the page", () => {
    const component = render(
      <BrowserRouter>
        <Provider store={store}>
          <LogIn />
        </Provider>
      </BrowserRouter>
    );
    const userSelector = component.getByTestId("selectUser");
    const submitButton = component.getByText("Submit");
    expect(userSelector).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
  it("renders the login page when logging out", () => {
    const component = render(
      <BrowserRouter>
        <Provider store={loggedInStore}>
          <App />
        </Provider>
      </BrowserRouter>
    );
    const dashboard = component.getByText("New Questions");
    expect(dashboard).toBeInTheDocument();
    const logOut = component.getByText("Logout");
    fireEvent.click(logOut);
    const logInSelector = screen.getByTestId("selectUser");
    expect(logInSelector).toBeInTheDocument();
  });
});

describe("The navbar works as expected", () => {
  it("renders with all the links", () => {
    const component = render(
      <BrowserRouter>
        <Provider store={store}>
          <NavBar />
        </Provider>
      </BrowserRouter>
    );
    const home = component.getByText("Home");
    const leaderboard = component.getByText("LeaderBoard");
    const newPoll = component.getByText("New");
    const logout = component.getByText("Logout");
    expect(home).toBeInTheDocument();
    expect(leaderboard).toBeInTheDocument();
    expect(newPoll).toBeInTheDocument();
    expect(logout).toBeInTheDocument();
  });
  it("renders the leaderboard when clicking on the navbar link", () => {
    const component = render(
      <BrowserRouter>
        <Provider store={loggedInStore}>
          <App />
        </Provider>
      </BrowserRouter>
    );
    const leaderboard = component.getByText("LeaderBoard");
    fireEvent.click(leaderboard);
    const leaderboardcomponent = screen.getByTestId("leaderboard");
    expect(leaderboardcomponent).toBeInTheDocument();
  });
});
