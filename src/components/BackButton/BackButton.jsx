import { useNavigate } from "react-router";
import "./BackButton.css";

const BackButton=({ title = "Back" })=> {
  const navigate=useNavigate();
  return (
    <>
    <div className="back" onClick={()=>{navigate(-1)}}>
      <svg
        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="ArrowBackIosOutlinedIcon"
        style={{ height: "42px", width: "21px" }}
      >
        <path d="M17.51 3.87 15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"></path>
      </svg>
      {title}
    </div>
    </>
  );
}

export default BackButton
