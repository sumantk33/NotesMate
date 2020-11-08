import {
  SUBJECT_LIST_FAIL,
  SUBJECT_LIST_REQUEST,
  SUBJECT_LIST_SUCCESS,
} from "../constants/subjectConstants";
import axios from "axios";

export const getSubjects = (dept, sem) => async (dispatch) => {
  try {
    dispatch({ type: SUBJECT_LIST_REQUEST });

    const { data } = await axios.get(
      `/api/notes/subjects?department=${dept}&sem=${sem}`
    );

    dispatch({
      type: SUBJECT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SUBJECT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
