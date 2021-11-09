import React from "react";
import Color from "./Color";

/**
 * colors are hook state data that are passed from the App.
 *
 * @param colors
 * @returns {JSX.Element}
 * @constructor
 */
export default function ColorList({ colors = [] }) {
  if(!colors.length) return <div>No Colors Listed.</div>;
  return (
    <div>
      {
        colors.map(color => <Color key={color.id} {...color} />)
      }
    </div>
  );
}