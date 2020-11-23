import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./css/DiscussScreen.css";
import { Container } from "react-bootstrap";
import Loader from "../components/Loader";
import Empty from "../components/Empty";
import PendingNotes from "../components/PendingNotes";
import { getPendingNotes } from "../actions/notesAction";

const PendingNotesScreen = ({ history }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const pendingNotesList = useSelector((state) => state.pendingNotesList);
  const { loading, notes } = pendingNotesList;

  useEffect(() => {
    if (!userInfo || !userInfo.isAdmin) {
      history.push("/login");
    } else {
      dispatch(getPendingNotes());
    }
  }, [userInfo, history, dispatch]);

  return (
    <div className='discuss'>
      <Container>
        <h1>Approve Notes</h1>
        {loading ? (
          <Loader />
        ) : notes.length === 0 ? (
          <Empty message='No pending notes to approve' />
        ) : (
          notes.map((note) => <PendingNotes note={note} />)
        )}
      </Container>
    </div>
  );
};

export default PendingNotesScreen;
