import React from "react";

function MenuPopup() {
  return (
    <div id="container" style={{ display: "block" }}>
      <div className="language" style={{ display: "flex", margin: "15px" }}>
        <div
          className="logo"
          style={{
            width: "27px",
            height: "26px",
            borderRadius: "6px",
            backgroundColor: "#DAE8FA",
          }}
        ></div>
        <span style={{ marginLeft: "15px" }}>Language</span>
      </div>
      <div className="language" style={{ display: "flex", margin: "15px" }}>
        <div
          className="logo"
          style={{
            width: "27px",
            height: "26px",
            borderRadius: "6px",
            backgroundColor: "#FFE2E5",
          }}
        ></div>
        <span style={{ marginLeft: "15px" }}>Help</span>
      </div>
      <div className="language" style={{ display: "flex", margin: "15px" }}>
        <div
          className="logo"
          style={{
            width: "27px",
            height: "26px",
            borderRadius: "6px",
            backgroundColor: "#FBEFC3",
          }}
        ></div>
        <span style={{ marginLeft: "15px" }}>Lock Screen</span>
      </div>
      <div className="language" style={{ display: "flex", margin: "15px" }}>
        <div
          className="logo"
          style={{
            width: "27px",
            height: "26px",
            borderRadius: "6px",
            backgroundColor: "#C9E0D6",
          }}
        ></div>
        <span style={{ marginLeft: "15px" }}>Logout</span>
      </div>
    </div>
  );
}

export default MenuPopup;
