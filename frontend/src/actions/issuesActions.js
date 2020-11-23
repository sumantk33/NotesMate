import {
  ISSUES_DELETE_FAIL,
  ISSUES_DELETE_REQUEST,
  ISSUES_DELETE_SUCCESS,
  ISSUES_LIST_FAIL,
  ISSUES_LIST_REQUEST,
  ISSUES_LIST_SUCCESS,
} from "../constants/issuesConstants";

import axios from "axios";

export const getIssues = () => async (dispatch) => {
  try {
    dispatch({ type: ISSUES_LIST_REQUEST });

    const { data } = await axios.get("/api/issues");

    dispatch({
      type: ISSUES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ISSUES_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteIssue = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/issues/${id}`);

    dispatch({
      type: ISSUES_DELETE_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: ISSUES_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
