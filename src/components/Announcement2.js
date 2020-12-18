import React from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function Announcement2(props) {
  return (
    <Alert variant={props.variant} className="border-0 rounded-0 text-center">
      {props.text}
      <Button
        variant={props.buttonColor}
        size="md"
        onClick={props.buttonOnClick}
        className="ml-3"
      >
        {props.buttonText}
      </Button>
    </Alert>
  );
}

export default Announcement2;
