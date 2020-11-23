import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  branchListReducer,
  branchDetailsReducer,
} from "./reducers/BranchReducers";
import { subjectListReducer } from "./reducers/SubjectsReducer";
import {
  notesListReducer,
  pendingNotesListRedcuer,
} from "./reducers/NotesReducers";
import {
  postListReducer,
  postDeleteReducer,
  postAddReducer,
  postSingleReducer,
  replyAddReducer,
  replyDeleteReducer,
} from "./reducers/DiscussReducers";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";
import { issuesListReducer } from "./reducers/issuesReducers";

const reducer = combineReducers({
  branchList: branchListReducer,
  branchDetails: branchDetailsReducer,
  subjectList: subjectListReducer,
  notesList: notesListReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  postList: postListReducer,
  postDelete: postDeleteReducer,
  postAdd: postAddReducer,
  postSingle: postSingleReducer,
  replyAdd: replyAddReducer,
  replyDelete: replyDeleteReducer,
  issuesList: issuesListReducer,
  pendingNotesList: pendingNotesListRedcuer,
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
