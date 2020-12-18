import React from "react";
import Alert from "react-bootstrap/Alert";
import { LinkContainer } from "react-router-bootstrap";

function Announcement(props) {
  return (
    <Alert variant={props.variant} className="border-0 rounded-0 text-center">
      {props.text}
      {` `}

      <LinkContainer to="/pricing">
        <Alert.Link>{props.linkText}</Alert.Link>
      </LinkContainer>
    </Alert>
  );
}

export default Announcement;
