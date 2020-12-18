// eslint-disable-next-line
import React, { useLayoutEffect } from "react";
// eslint-disable-next-line
import auth0 from "./../util/auth0.js";

function Auth0CallbackPage(props) {
  useLayoutEffect(() => {
    // Hide body so layout components are not visible
    document.body.style.display = "none";
    // Get auth results and close popup
    // eslint-disable-next-line
    auth0.popup.callback();
  }, []);

  return null;
}

export default Auth0CallbackPage;
