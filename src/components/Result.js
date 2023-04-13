import React from 'react';

const Result = ({qa, notify}) => {
    return (
      <div className="container">
        <div className="result-div p-3">
          <div className="row p-3">
            <div className="col-lg-12">
              <div className="card p-3">
                <div role="button" className="icon-item ">
                  <div className="icon-item-icon red-gradient-bg">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 20 20"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div className="icon-item-right">
                    <div
                      className="icon-item-title body-large bold"
                      style={{ color: "#E7B10A" }}
                    >
                      Entered Text
                    </div>
                    <div className="icon-item-desc body-small">
                      {qa.question}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 pt-4">
              <div className="card p-3">
                <div role="button" className="icon-item " onClick={notify}>
                  <div className="icon-item-icon green-gradient-bg">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 20 20"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div className="icon-item-right">
                    <div
                      className="icon-item-title body-large bold"
                      style={{ color: "#E7B10A" }}
                    >
                      Corrected Text
                    </div>
                    <div className="icon-item-desc body-small">{qa.answer}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Result