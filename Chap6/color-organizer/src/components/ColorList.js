import React from "react";
import Color from "./Color";

/**
 * colors are hook state data that are passed from the App.
 *
 * @param colors
 * @param onRemoveColor
 * @returns {JSX.Element|unknown[]}
 * @constructor
 */
export default function ColorList({ colors = [], onRemoveColor = f => f }) {
  if(!colors.length) return <div>No Colors Listed. (Add a Color)</div>;
  return (
    colors.map(color =>
      <Color key={color.id} {...color} onRemove={onRemoveColor} />
    )
  );
}