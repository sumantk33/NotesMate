import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  branchListReducer,
  branchDetailsReducer,
} from "./reducers/BranchReducers";
import { subjectListReducer } from "./reducers/SubjectsReducer";
import { notesListReducer } from "./reducers/NotesReducers";
import { postListReducer } from "./reducers/DiscussReducers";
import { userLoginReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  branchList: branchListReducer,
  branchDetails: branchDetailsReducer,
  subjectList: subjectListReducer,
  notesList: notesListReducer,
  postList: postListReducer,
  userLogin: userLoginReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
