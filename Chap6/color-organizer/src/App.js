import React, { useState } from "react";
import colorData from "./data/color-data.json";
import ColorList from "./components/ColorList";

export default function App() {
  const [colors] = useState(colorData);
  return <ColorList colors={colors} />;
}