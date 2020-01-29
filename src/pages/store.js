import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

// We need a store for the redux forms?
const rootReducer = combineReducers({
  form: formReducer
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
