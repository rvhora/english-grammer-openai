import React from "react";
import darkSunImage from "../assets/dark-sun.png";
import lightSunImage from "../assets/light-sun.png";
import { useGlobalContext } from "./AppContext";

const Welcome = () => {
  const { darkTheme, starter, hideStarter } = useGlobalContext();
  return (
    <React.Fragment>
      {starter && (
        <div className="starter-div">
          <div className="welcome-div">
            <div className="icon-item">
              <div className="icon-item-icon purple-gradient-bg">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 20 20"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                </svg>
              </div>
              <div className="icon-item-right">
                <div className="icon-item-title body-large bold">
                  Grammar correction
                </div>
                <div className="icon-item-desc body-small">
                  Corrects sentences into standard English.
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-5">
            <img
              src={darkTheme ? lightSunImage : darkSunImage}
              alt="sun_image"
              width="40"
            />
            <p>Examples</p>
            <div className="row">
              <div className="col-lg-3"></div>
              <div className="col-lg-3">
                <div className="card examples-card p-3 mb-2">
                  <p>
                    "I go shop yesterday"
                    <i className="fas fa-arrow-right"></i>
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card examples-card p-3">
                  <p>"I went to shop yesterday."</p>
                </div>
              </div>
              <div className="col-lg-3"></div>
            </div>
          </div>

          <div className="text-center pt-5">
            <button className="btn start-btn" onClick={hideStarter}>
              Start
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Welcome;
