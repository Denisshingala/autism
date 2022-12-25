import React from "react";
import { ComingSoonImg } from "../../images/images";
import Navbar from "../../components/Navbar/NavbarComponent";
import Footer from "../../components/Footer/FooterComponent";

const ComingSoon = () => {
  return (
    <>
      <Navbar />
      <div
        className="d-flex justify-content-center"
        style={{ backgroundColor: "#FAFAFA" }}
      >
        <div
          className="d-flex align-items-center flex-column py-3"
          style={{ backgroundColor: "#fff", width: "50%", margin: "40px auto" }}
        >
          <img src={ComingSoonImg} alt="" height="250" width="300" />
          <hr style={{width:"50%", height:"2px"}}/>
          <h3>Coming Soon!</h3>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ComingSoon;
