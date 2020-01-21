// import { createStore, combineReducers } from "redux";
// import { reducer as formReducer } from "redux-form";

// // We need a store for the redux forms?
// const rootReducer = combineReducers({
//   form: formReducer

// });

// export const store = createStore(rootReducer);

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;