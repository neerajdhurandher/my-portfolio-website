import React, { useState } from "react";
import CustomCursorContext, {
  CursorLookType,
} from "../context/CustomCursorContext";

const CustomCursorManager = ({}) => {
  const [type, setType] = useState<CursorLookType>("default");

  return (
    <CustomCursorContext.Provider value={{ type, setType }}>
    </CustomCursorContext.Provider>
  );
};

export default CustomCursorManager;
