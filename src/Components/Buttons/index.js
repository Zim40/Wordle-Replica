import React, { useState } from "react";

export default function Buttons() {
  // Worlde "GAME" and Container

  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const [rulesVisible, setRulesVisible] = useState(false);

  const showRules = () => {
    setRulesVisible(!rulesVisible);
    setDescriptionVisible(descriptionVisible);
  };

  const showAbout = () => {
    setDescriptionVisible(!descriptionVisible);
    setRulesVisible(rulesVisible);
  };

  return (
    <>
      <div className="btn-container">
        <button
          type="button"
          name="about"
          className="aboutBtn"
          onClick={showAbout}
        >
          About{" "}
        </button>

        <button
          type="button"
          name="rules"
          className="rulesBtn"
          onClick={showRules}
        >
          Rules{" "}
        </button>
      </div>
      <div className="info-Container">
        <div className="game--abt-rules">
          {descriptionVisible && (
            <div>
              {" "}
              <p
                id="description"
                style={{
                  fontWeight: 600,
                  zIndex: 1,
                  visibility: descriptionVisible ? "visible" : "hidden",
                }}
              >
                Unleash your inner wordsmith with Wordle! In this captivating
                word puzzle game, decipher the 5-letter mystery word in just six
                attempts.
              </p>
            </div>
          )}
          {rulesVisible && (
            <div>
              <ol
                id="rules"
                style={{
                  fontWeight: 600,
                  zIndex: 2,
                  visibility: rulesVisible ? "visible" : "hidden",
                }}
              >
                <li>
                  Objective: Guess a five-letter word within six attempts.
                </li>
                <li>Guessing: Make valid English word guesses.</li>
                <li>
                  Feedback: Colors indicate correct letters and positions.
                </li>
                <li>Limited Attempts: Six guesses allowed.</li>
                <li>Winning: Guess the word correctly to win.</li>
              </ol>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
