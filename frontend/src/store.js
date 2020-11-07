import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  branchListReducer,
  branchDetailsReducer,
} from "./reducers/BranchReducers";
import { notesListReducer } from "./reducers/NotesReducers";

const reducer = combineReducers({
  branchList: branchListReducer,
  branchDetails: branchDetailsReducer,
  notesList: notesListReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
