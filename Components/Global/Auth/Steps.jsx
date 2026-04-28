import React from "react";

const Steps = () => {
  return (
    <div className="step-bar-wrapper my-4">
      <ul className="step-wrapper d-flex justify-content-between align-items-center">
        <li className="completed">
          <span className="step-circle completed-circle"></span>
          <p className="step-label">Start</p>
        </li>
        <li className="active">
          <span className="step-circle active-circle"></span>
          <p className="step-label">Middle</p>
        </li>
        <li>
          <span className="step-circle"></span>
          <p className="step-label">End</p>
        </li>
      </ul>

      <style jsx>{`
        .step-wrapper {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          position: relative;
        }
        .step-wrapper li {
          flex: 1;
          text-align: center;
          position: relative;
        }
        .step-wrapper li:not(:last-child)::after {
          content: "";
          position: absolute;
          top: 15px;
          right: 0;
          width: 100%;
          height: 4px;
          background: #e0e0e0;
          z-index: -1;
        }
        .step-circle {
          display: inline-block;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #e0e0e0;
          transition: all 0.3s ease;
          margin-bottom: 8px;
        }
        .completed-circle {
          background: #4caf50;
        }
        .active-circle {
          background: #2196f3;
          transform: scale(1.3);
          box-shadow: 0 0 10px rgba(33, 150, 243, 0.6);
        }
        .step-label {
          font-size: 0.9rem;
          color: #555;
        }
      `}</style>
    </div>
  );
};

export default Steps;
