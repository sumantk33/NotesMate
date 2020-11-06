import {
  BRANCH_LIST_FAIL,
  BRANCH_LIST_SUCCESS,
  BRANCH_LIST_REQUEST,
  SET_CURRENT,
} from "../constants/branchConstants";
import axios from "axios";

export const listBranches = () => async (dispatch) => {
  try {
    dispatch({ type: BRANCH_LIST_REQUEST });

    const { data } = await axios.get("/api/branches");

    dispatch({
      type: BRANCH_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BRANCH_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const setCurrent = (branch) => async (dispatch) => {
  dispatch({
    type: SET_CURRENT,
    payload: branch,
  });
};
