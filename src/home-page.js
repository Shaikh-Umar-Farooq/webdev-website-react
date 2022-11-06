import "./components/home-page.css";
import logo from "./images/acm logo 1.png";
import img1 from "./images/Saly-10.png";
import img2 from "./images/Saly-26.png";
import img3 from "./images/Saly-24.png";
import img4 from "./images/Vector.png";
import img5 from "./images/Vector (1).png";
import img6 from "./images/Vector (2).png";
import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (<div className="App">
    <div className="logo-container">
      <a href="http://thapar.acm.org/">
        <img className="logo-pic" src={logo} alt="ACM"></img>
      </a>
    </div>

    <div className="main-container-home">
      <div className="left">
        <div className="left-head">
          <h1 className="left-h1">The Web Dev Bootcamp</h1>
        </div>
        <div className="right">
          <img className="right-image" src={img1} alt="img"></img>
        </div>
        <div className="left-para">
          <p className="left-para-text">
            The Web Dev Bootcamp organized by ACM is a carefully selected
            course of documentations and videos that intends to teach
            individuals the fundamentals of web dev and help them advance in a
            project-based learning environment.
          </p>
        </div>

        <a className="main" href="#docs">

          <button
            className="secondary-btn-home main-btn"
            style={{
              width: "150px"
            }}
          >Let's Get Started
          </button>

        </a>
      </div>
    </div>

    <div id="docs">
      <div className="second-container">
        <div className="second scn">
          <div className="text1">
            <p>
              {" "}
              The Documentation Section is the beginner's roadmap to the
              domain of web dev, with written descriptions for the languages
              involved and resources to help learn in a self-paced manner.
            </p>
            <Link to="/howto">
              <button
                className="secondary-btn-home"
                onclick="window.location.href='docs/docs-home.html'"
                style={{
                  height: "34px",
                  top: "581px",
                  left: "1162px"
                }}
              >
                {" "}
                DOCS
              </button>
            </Link>
          </div>
          <div className="secondary-image">
            <img className="images1" src={img2} alt=""></img>
          </div>
        </div>
      </div>
      <div
        className="second-container"
        style={{
          alignItems: "center"
        }}
      >
        <div className="second">
          <div className="secondary-image">
            <img className="images2" src={img3} alt=""></img>
          </div>
          <div className="text2">
            <p>
              The Video section consists of an organized selection of
              playlists of all the components of web dev in a sequential
              manner, for any individual to follow.
            </p>
            <Link to="/html">
              <button
                className="secondary-btn-home"
                onclick=" window.location.href='lectures/lecture-home.html'"
              >
                VIDEOS
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="foot-container">
        <div className="foot">
          <div
            className="social"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <a href="https://www.instagram.com/acmthapar/?hl=en">
              <img className="socials" src={img6} alt="img"></img>
            </a>
            <a href="https://www.linkedin.com/company/thapar-acm-student-chapter/?originalSubdomain=in">
              <img className="socials " src={img4} alt="img"></img>
            </a>
            <a href="https://github.com/ACM-Thapar">
              <img className="socials" src={img5} alt="img"></img>
            </a>
          </div>
          <p>Copyright &copy; acm thapar</p>
        </div>
      </div>
    </div>
  </div >
  );
}