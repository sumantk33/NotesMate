import {
  BRANCH_LIST_FAIL,
  BRANCH_LIST_SUCCESS,
  BRANCH_LIST_REQUEST,
  SET_CURRENT,
} from "../constants/branchConstants";

export const branchListReducer = (state = { branches: [] }, action) => {
  switch (action.type) {
    case BRANCH_LIST_REQUEST:
      return { loading: true };
    case BRANCH_LIST_SUCCESS:
      return { loading: false, branches: action.payload };
    case BRANCH_LIST_FAIL:
      return { loading: false, error: action.payload };
    case SET_CURRENT:
      return { ...state, currBranch: action.payload };
    default:
      return state;
  }
};
