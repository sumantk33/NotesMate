import {
  POST_LIST_FAIL,
  POST_LIST_SUCCESS,
  POST_LIST_REQUEST,
  POST_DELETE_FAIL,
  POST_DELETE_REQUEST,
  POST_DELETE_SUCCESS,
  POST_ADD_REQUEST,
  POST_ADD_SUCCESS,
  POST_ADD_FAIL,
  POST_SINGLE_FAIL,
  POST_SINGLE_REQUEST,
  POST_SINGLE_SUCCESS,
  REPLY_ADD_FAIL,
  REPLY_ADD_REQUEST,
  REPLY_ADD_SUCCESS,
  REPLY_DELETE_FAIL,
  REPLY_DELETE_REQUEST,
  REPLY_DELETE_SUCCESS,
} from "../constants/discussConstants";

import axios from "axios";

const getCreatedAt = () => {
  const today = new Date();
  const dd = today.getDate();
  const mm = today.getMonth() + 1; // January is 0
  const yyyy = today.getFullYear();
  return dd.toString() + "-" + mm.toString() + "-" + yyyy.toString();
};

const getSorting = () => {
  const today = new Date();
  const dd = today.getDate();
  const mm = today.getMonth() + 1; // January is 0
  const yyyy = today.getFullYear();
  return yyyy.toString() + "-" + mm.toString() + "-" + dd.toString();
};

export const getPosts = () => async (dispatch) => {
  try {
    dispatch({ type: POST_LIST_REQUEST });

    const { data } = await axios.get("/api/discuss");

    dispatch({
      type: POST_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getSinglePost = (id) => async (dispatch) => {
  try {
    dispatch({ type: POST_SINGLE_REQUEST });

    const { data } = await axios.get(`/api/discuss/${id}`);

    dispatch({
      type: POST_SINGLE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_SINGLE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addPost = (title, description) => async (dispatch, getState) => {
  try {
    dispatch({ type: POST_ADD_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const newPost = {
      createdAt: getCreatedAt(),
      title: title,
      description: description,
      sortingDate: getSorting(),
    };

    await axios.post("/api/discuss", newPost, config);

    dispatch({
      type: POST_ADD_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: POST_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deletePost = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: POST_DELETE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    await axios.delete(`/api/discuss/${id}`, config);

    dispatch({
      type: POST_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: POST_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addReply = (description, postId) => async (dispatch, getState) => {
  try {
    dispatch({ type: REPLY_ADD_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const newReply = {
      replyDescription: description,
      replySortingDate: getSorting(),
      replyCreatedAt: getCreatedAt(),
    };

    const { data } = await axios.post(
      `/api/discuss/${postId}`,
      newReply,
      config
    );

    dispatch({
      type: REPLY_ADD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteReply = (postId, replyId) => async (dispatch, getState) => {
  try {
    dispatch({ type: REPLY_DELETE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/discuss/reply/${postId}/${replyId}`, config);

    dispatch({
      type: REPLY_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: REPLY_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
