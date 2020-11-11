import {
  POST_LIST_FAIL,
  POST_LIST_SUCCESS,
  POST_LIST_REQUEST,
  POST_DELETE_REQUEST,
  POST_DELETE_FAIL,
  POST_DELETE_SUCCESS,
  POST_ADD_FAIL,
  POST_ADD_REQUEST,
  POST_ADD_SUCCESS,
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

export const postListReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case POST_LIST_REQUEST:
      return { loading: true };
    case POST_LIST_SUCCESS:
      return { loading: false, posts: action.payload };
    case POST_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const postAddReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_ADD_REQUEST:
      return { loading: true };
    case POST_ADD_SUCCESS:
      return { loading: false, success: true };
    case POST_ADD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const postSingleReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_SINGLE_REQUEST:
      return { loading: true };
    case POST_SINGLE_SUCCESS:
      return { loading: false, post: action.payload };
    case POST_SINGLE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const postDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_DELETE_REQUEST:
      return { loading: true };
    case POST_DELETE_SUCCESS:
      return { loading: false, success: true };
    case POST_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const replyAddReducer = (state = {}, action) => {
  switch (action.type) {
    case REPLY_ADD_REQUEST:
      return { loading: true };
    case REPLY_ADD_SUCCESS:
      return { loading: false, reply: action.payload, success: true };
    case REPLY_ADD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const replyDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case REPLY_DELETE_REQUEST:
      return { loading: true };
    case REPLY_DELETE_SUCCESS:
      return { loading: false, success: true };
    case REPLY_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
