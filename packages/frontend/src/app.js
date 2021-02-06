import "core-js/stable";
import "regenerator-runtime/runtime";

import React from "react";
import { render } from "react-dom";
import "style.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

import App from "pages/App";

render(<App />, document.getElementById("root"));
