import {
  ISSUES_LIST_FAIL,
  ISSUES_LIST_REQUEST,
  ISSUES_LIST_SUCCESS,
  ISSUES_DELETE_FAIL,
  ISSUES_DELETE_REQUEST,
  ISSUES_DELETE_SUCCESS,
} from "../constants/issuesConstants";

export const issuesListReducer = (state = { issues: [] }, action) => {
  switch (action.type) {
    case ISSUES_LIST_REQUEST:
      return { loading: true };
    case ISSUES_LIST_SUCCESS:
      return { loading: false, issues: action.payload };
    case ISSUES_LIST_FAIL:
      return { loading: false, error: action.payload };
    // case ISSUES_DELETE_REQUEST:
    //   return { ...state, loading: true };
    case ISSUES_DELETE_SUCCESS:
      return {
        ...state,
        issues: state.issues.filter((issue) => issue._id !== action.payload),
      };
    case ISSUES_DELETE_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
