import {
  SUBJECT_LIST_FAIL,
  SUBJECT_LIST_REQUEST,
  SUBJECT_LIST_SUCCESS,
} from "../constants/subjectConstants";

export const subjectListReducer = (state = { subjects: [] }, action) => {
  switch (action.type) {
    case SUBJECT_LIST_REQUEST:
      return { loading: true };
    case SUBJECT_LIST_SUCCESS:
      return { loading: false, subjects: action.payload };
    case SUBJECT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
