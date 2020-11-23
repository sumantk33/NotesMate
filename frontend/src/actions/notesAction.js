import {
  NOTES_LIST_FAIL,
  NOTES_LIST_REQUEST,
  NOTES_LIST_SUCCESS,
  PENDING_NOTES_LIST_FAIL,
  PENDING_NOTES_LIST_REQUEST,
  PENDING_NOTES_LIST_SUCCESS,
  PENDING_NOTES_APPROVE_FAIL,
  PENDING_NOTES_APPROVE_SUCCESS,
  PENDING_NOTES_DELETE_FAIL,
  PENDING_NOTES_DELETE_SUCCESS,
} from "../constants/notesConstants";
import axios from "axios";

export const getNotes = (dept, sem, sub_code) => async (dispatch) => {
  try {
    dispatch({ type: NOTES_LIST_REQUEST });

    const { data } = await axios.get(
      `/api/notes?department=${dept}&sem=${sem}&sub_code=${sub_code}`
    );

    dispatch({
      type: NOTES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NOTES_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getPendingNotes = () => async (dispatch) => {
  try {
    dispatch({ type: PENDING_NOTES_LIST_REQUEST });

    const { data } = await axios.get("/api/upload");

    dispatch({
      type: PENDING_NOTES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PENDING_NOTES_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const approveNotes = (id) => async (dispatch) => {
  try {
    await axios.get(`/api/upload/approve/${id}`);

    dispatch({
      type: PENDING_NOTES_APPROVE_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: PENDING_NOTES_APPROVE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deletePendingNotes = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/upload/delete/${id}`);

    dispatch({
      type: PENDING_NOTES_DELETE_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: PENDING_NOTES_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
