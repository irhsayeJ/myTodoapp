import React from "react";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
function Header() {
  return (
    <div className="header">
      <LightbulbIcon className="header-icon" />
      <h1 className="header-h1">myTodoapp</h1>
    </div>
  );
}

export default Header;
