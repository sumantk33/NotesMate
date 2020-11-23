import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./css/DiscussScreen.css";
import { Container, Button } from "react-bootstrap";
import Loader from "../components/Loader";
import { getIssues } from "../actions/issuesActions";
import Empty from "../components/Empty";
import IssueCard from "../components/IssueCard";

const IssuesScreen = ({ history }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const issuesList = useSelector((state) => state.issuesList);
  const { loading, issues } = issuesList;

  useEffect(() => {
    if (!userInfo || !userInfo.isAdmin) {
      history.push("/login");
    } else {
      dispatch(getIssues());
    }
  }, [userInfo, history]);

  return (
    <div className='discuss'>
      <Container>
        <h1>Issues</h1>
        {loading ? (
          <Loader />
        ) : issues.length === 0 ? (
          <Empty message='No issues posted' />
        ) : (
          issues.map((issue) => <IssueCard issue={issue} />)
        )}
      </Container>
    </div>
  );
};

export default IssuesScreen;
