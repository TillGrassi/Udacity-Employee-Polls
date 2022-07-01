import { createStore } from "redux";
import middleware from "./middleware";
import reducer from "./reducers";

export function createTestStore() {
  const store = createStore(reducer, middleware);
  return store;
}
export function createLoggedInTestStore() {
  const store = createStore(
    reducer,
    { authedUser: { id: "sarahedo" } },
    middleware
  );
  return store;
}
