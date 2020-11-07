import {
  BRANCH_LIST_FAIL,
  BRANCH_LIST_SUCCESS,
  BRANCH_LIST_REQUEST,
  BRANCH_DETAILS_REQUEST,
  BRANCH_DETAILS_SUCCESS,
  BRANCH_DETAILS_FAIL,
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

export const getCurrent = (code) => async (dispatch) => {
  try {
    dispatch({ type: BRANCH_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/branches?code=${code}`);

    dispatch({
      type: BRANCH_DETAILS_SUCCESS,
      payload: data[0],
    });
  } catch (error) {
    dispatch({
      type: BRANCH_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
