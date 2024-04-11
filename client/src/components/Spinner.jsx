import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useState } from "react";
const cssOverride = {
  display: "block",
  margin: "100px auto",
};
const Spinner = ({ loading }) => {
  let [color, setColor] = useState("#ffffff");
  return (
    <ClipLoader
      color={color}
      loading={loading}
      cssOverride={cssOverride}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Spinner;
