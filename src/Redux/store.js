import { createStore } from "redux";
import ToDos from "./Reducer/reducer";

const store = createStore(
  ToDos,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
