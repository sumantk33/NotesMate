import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

const BreadCrumb = ({ branch, sem, subject }) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to='/'>Home</Link>
      </Breadcrumb.Item>

      {!subject && !sem ? (
        <Breadcrumb.Item active>{branch}</Breadcrumb.Item>
      ) : (
        <>
          <Breadcrumb.Item>
            <Link to={`/branch/${branch}`}>{branch}</Link>
          </Breadcrumb.Item>
          {!subject ? (
            <Breadcrumb.Item active>Sem {sem}</Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item>
              <Link to={`/branch/${branch}/${sem}`}>Sem {sem}</Link>
            </Breadcrumb.Item>
          )}

          {subject && <Breadcrumb.Item active>{subject}</Breadcrumb.Item>}
        </>
      )}
    </Breadcrumb>
  );
};

export default BreadCrumb;
