import React from "react";
import Navbar from "../../components/Navbar/NavbarComponent";
import Footer from "../../components/Footer/FooterComponent";
import "./Pricing.css";
import { Button, Divider } from "@mui/material";
import { Clear, Done } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Pricing = () => {
  const icons = {
    cross: <Clear style={{ color: "#BA0000", marginRight: "10px" }} />,
    tick: <Done style={{ color: "#6BAB90", marginRight: "10px" }} />,
  };

  return (
    <div>
      <Navbar />
      <div style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container">
          <div className="row pricing-intro-div my-3">
            <div className="col-md-6 col-12 pricing-intro-img d-flex align-items-center">
              <h1>
                Introducing
                <br />
                our
                <br />
                Autsi Pen
              </h1>
            </div>

            <div className="col-md-6 col-12 pricing-intro-div-right">
              <h4>Give realistic Experience to your kids</h4>
              <ul>
                <li>We are introducing our stylus pen for kids which is</li>
                <li>flexible</li>
                <li>easy to use</li>
                <li>support independency</li>
              </ul>
              <Link to="/comingsoon" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#FE93A0",
                    width: "50%",
                  }}
                >
                  Buy Now
                </Button>
              </Link>
            </div>
          </div>

          <div
            className="my-5 d-flex flex-column align-items-center"
            id="pricing-div"
          >
            <h2>Fair prices to fit your needs</h2>
            <p style={{ color: "#808080", fontSize: "12px" }}>
              Simple, transparent prices. choose your plan. cancel anytime
            </p>

            <div className="d-flex justify-content-center flex-wrap w-100">
              <div className="pricing-card my-3 mx-4 mx-4 py-2 px-3">
                <div
                  className="d-flex flex-column align-items-center justify-content-center py-2"
                  style={{ backgroundColor: "#ECF2FB", borderRadius: "5px" }}
                >
                  <button
                    className="subscription-type-btn py-1"
                    style={{ backgroundColor: "#FFC727" }}
                  >
                    Unlimited
                  </button>
                  <span style={{ fontWeight: "400", fontSize: "40px" }}>
                    &#8377; 0.00{" "}
                    <span style={{ fontSize: "16px", color: "#BA0000" }}>
                      Free
                    </span>
                  </span>
                  <span>Basic Plan</span>
                </div>
                <ul>
                  <li>{icons.cross}Autsi Pen</li>
                  <Divider />
                  <li>{icons.tick}Unlimited games</li>
                  <Divider />
                  <li>{icons.cross}Audio hearing feature</li>
                  <Divider />
                  <li>{icons.tick}Unlock levels (max 3)</li>
                  <Divider />
                  <li>{icons.tick}Dashboard</li>
                  <Divider />
                  <li>{icons.cross}Tracking improvement through activity</li>
                  <Divider />
                </ul>
                <div className="d-flex justify-content-center my-3">
                  <Link to="comingsoon" style={{ textDecoration: "none" }}>
                    <Button
                      variant="outlined"
                      style={{ color: "#FE93A0", borderColor: "#FE93A0" }}
                    >
                      Choose Plan
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="pricing-card my-3 mx-4 mx-4 py-2 px-3">
                <div
                  className="d-flex flex-column align-items-center justify-content-center py-2"
                  style={{ backgroundColor: "#ECF2FB", borderRadius: "5px" }}
                >
                  <button
                    className="subscription-type-btn py-1"
                    style={{ backgroundColor: "#4BCF97" }}
                  >
                    Monthly
                  </button>
                  <span style={{ fontWeight: "400", fontSize: "40px" }}>
                    &#8377; 399.00{" "}
                    <span
                      style={{
                        fontSize: "16px",
                        color: "#BA0000",
                        textDecoration: "line-through",
                      }}
                    >
                      999
                    </span>
                  </span>
                  <span>Standard Plan</span>
                </div>
                <ul>
                  <li>{icons.tick}Autsi Pen</li>
                  <Divider />
                  <li>{icons.tick}Unlimited games</li>
                  <Divider />
                  <li>{icons.tick}Audio hearing feature</li>
                  <Divider />
                  <li>{icons.tick}Unlock levels (Full game)</li>
                  <Divider />
                  <li>{icons.tick}Dashboard</li>
                  <Divider />
                  <li>{icons.tick}Tracking improvement through activity</li>
                  <Divider />
                </ul>
                <div className="d-flex justify-content-center my-3">
                  <Link to="/comingsoon" style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "#FE93A0" }}
                    >
                      Choose Plan
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="pricing-card my-3 mx-4 mx-4 py-2 px-3">
                <div
                  className="d-flex flex-column align-items-center justify-content-center py-2"
                  style={{ backgroundColor: "#ECF2FB", borderRadius: "5px" }}
                >
                  <button
                    className="subscription-type-btn py-1"
                    style={{ backgroundColor: "#FA86C4" }}
                  >
                    Yearly
                  </button>
                  <span style={{ fontWeight: "400", fontSize: "40px" }}>
                    &#8377; 3,999.00{" "}
                    <span
                      style={{
                        fontSize: "16px",
                        color: "#BA0000",
                        textDecoration: "line-through",
                      }}
                    >
                      4,999
                    </span>
                  </span>
                  <span>Pro Plan</span>
                </div>
                <ul>
                  <li>{icons.tick}Autsi Pen</li>
                  <Divider />
                  <li>{icons.tick}Unlimited games</li>
                  <Divider />
                  <li>{icons.tick}Audio hearing feature</li>
                  <Divider />
                  <li>{icons.tick}Unlock levels (Full game)</li>
                  <Divider />
                  <li>{icons.tick}Dashboard</li>
                  <Divider />
                  <li>{icons.tick}Tracking improvement through activity</li>
                  <Divider />
                </ul>
                <div className="d-flex justify-content-center my-3">
                  <Link to="/comingsoon" style={{ textDecoration: "none" }}>
                    <Button
                      variant="outlined"
                      style={{ color: "#FE93A0", borderColor: "#FE93A0" }}
                    >
                      Choose Plan
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
