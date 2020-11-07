import {
  BRANCH_LIST_FAIL,
  BRANCH_LIST_SUCCESS,
  BRANCH_LIST_REQUEST,
  BRANCH_DETAILS_REQUEST,
  BRANCH_DETAILS_SUCCESS,
  BRANCH_DETAILS_FAIL,
} from "../constants/branchConstants";

export const branchListReducer = (
  state = { branches: [], currBranch: {} },
  action
) => {
  switch (action.type) {
    case BRANCH_LIST_REQUEST:
      return { loading: true };
    case BRANCH_LIST_SUCCESS:
      return { loading: false, branches: action.payload };
    case BRANCH_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const branchDetailsReducer = (state = { currBranch: {} }, action) => {
  switch (action.type) {
    case BRANCH_DETAILS_REQUEST:
      return { loading: true };
    case BRANCH_DETAILS_SUCCESS:
      return { loading: false, currBranch: action.payload };
    case BRANCH_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
