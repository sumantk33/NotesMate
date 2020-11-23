import {
  NOTES_LIST_REQUEST,
  NOTES_LIST_SUCCESS,
  NOTES_LIST_FAIL,
  PENDING_NOTES_LIST_FAIL,
  PENDING_NOTES_LIST_REQUEST,
  PENDING_NOTES_LIST_SUCCESS,
  PENDING_NOTES_APPROVE_FAIL,
  PENDING_NOTES_APPROVE_SUCCESS,
  PENDING_NOTES_DELETE_FAIL,
  PENDING_NOTES_DELETE_SUCCESS,
} from "../constants/notesConstants";

export const notesListReducer = (state = { notes: [] }, action) => {
  switch (action.type) {
    case NOTES_LIST_REQUEST:
      return { loading: true };
    case NOTES_LIST_SUCCESS:
      return { loading: false, notes: action.payload };
    case NOTES_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const pendingNotesListRedcuer = (state = { notes: [] }, action) => {
  switch (action.type) {
    case PENDING_NOTES_LIST_REQUEST:
      return { loading: true };
    case PENDING_NOTES_LIST_SUCCESS:
      return { loading: false, notes: action.payload };
    case PENDING_NOTES_LIST_FAIL:
      return { loading: false, error: action.payload };
    case PENDING_NOTES_APPROVE_SUCCESS:
      return {
        ...state,
        notes: state.notes.filter((note) => note._id !== action.payload),
      };
    case PENDING_NOTES_APPROVE_FAIL:
      return { ...state, error: action.payload };
    case PENDING_NOTES_DELETE_SUCCESS:
      return {
        ...state,
        notes: state.notes.filter((note) => note._id !== action.payload),
      };
    case PENDING_NOTES_DELETE_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
