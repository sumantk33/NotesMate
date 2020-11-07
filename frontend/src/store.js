import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  branchListReducer,
  branchDetailsReducer,
} from "./reducers/BranchReducers";
import { subjectListReducer } from "./reducers/SubjectsReducer";
import { notesListReducer } from "./reducers/NotesReducers";

const reducer = combineReducers({
  branchList: branchListReducer,
  branchDetails: branchDetailsReducer,
  subjectList: subjectListReducer,
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
