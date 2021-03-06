import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";
function Session({ session, displayDuration, updatedAria, isTimerRunning }) {
  return (
    session && (
      <div>
        <div className="row mb-2">
          <div className="col">
            <h2 data-testid="session-title">
              {session?.label} for{" "}
              {minutesToDuration(displayDuration(session?.label))} minutes
            </h2>

            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(session?.timeRemaining)} remaining
            </p>
            {!isTimerRunning && <h2>Paused</h2>}
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={updatedAria}
                style={{ width: `${updatedAria}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Session;
