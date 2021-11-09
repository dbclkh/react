// ./src/index.js

import React from "react";
import { render } from "react-dom";
import StarRating from "./components/StarRating";

render(<StarRating style={{ backgroundColor: "lightblue"}} onDoubleClick={e => alert("double click")} />, document.getElementById("root"));