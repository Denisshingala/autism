import React from "react";

function LanguagesPopup() {
  return (
    <div id="container">
      <div className="language" style={{ display: "flex" }}>
        <div
          className="logo"
          style={{ width: "27px", height: "26px", borderRadius:"6px", backgroundColor: "#DAE8FA" }}
        ></div>
        <span style={{marginLeft:"15px"}}>Hindi</span>
      </div>
    </div>
  );
}

export default LanguagesPopup;
