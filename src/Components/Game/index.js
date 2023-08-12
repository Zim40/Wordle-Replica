import React, { useState, useEffect } from "react";
import { words } from "../../wordList/wordList";

export default function Game() {
  // Test code for random word value.
  // const randomIndex = Math.floor(Math.random() * words.length);
  // const randomWord = words[randomIndex];
  
// Set Target Word before game starts
  // const correctAnswer = randomWord;
  
// Assign states for Target Word, Restart Button and Guessed Words.
  const [correctWord, setCorrectWord] = useState("");
  const [showRestartBtn, setShowRestartBtn] = useState(false);
  const [guessedWord, setGuessedWord] = useState("");

  useEffect( () => {
    const fetchData = async () => {
      try {
    const response = await fetch('/fetch-word')
   
      if(!response.ok) {
        throw new Error('Network response was not ok');
      }
      const word = await response.json();
   
    
      const randomIndex =  Math.floor(Math.random() * word.length);
      const randomWord = word[randomIndex];
      
    // Set Target Word before game starts
      setCorrectWord(randomWord);
      console.log(randomWord);
    } catch (error) {
      console.log("There was a problem with the fetch operation:", error);
    }
  };
  fetchData();
  }, []);
  

// submit guess function.
  const guessSubmit = (event) => {
    event.preventDefault();

    const input = document.getElementById("textArea");
    const guessedWord = input.value.trim().toUpperCase();
    setGuessedWord(guessedWord);
    
// Check if word matches Target Word.
    if (guessedWord === correctWord) {
      
      const success = document.getElementById("correctWord");
      success.textContent = correctWord;
// Flips restart button Boolean to reveal button if guess correct.
      if (!showRestartBtn) {
        setShowRestartBtn(true);
      }
// Incorrect guess resets useStates
    } else if (guessedWord !== correctWord) {
      console.log("try again");
      setShowRestartBtn(false);
      setGuessedWord("");
      const success = document.getElementById("correctWord");
      success.textContent = "";
    }
  };

// Restart Game function
  const restartGame = () => {
// Test code for random word value.
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];

    console.log("restart initiated");

    setShowRestartBtn(false);
    setGuessedWord("");
    setCorrectWord(randomWord);

    const success = document.getElementById("correctWord");
    success.textContent = "";
  };



  return (
    <main className="main--game">
      {/* guessed correct word */}
      <p className="correctWord" id="correctWord"></p>
        <h5>Make your guess here!</h5>
            <form id="form" onSubmit={guessSubmit}>
            {/* user input */}
              <input
                autoComplete="off"
                className="textArea"
                id="textArea"
                value={guessedWord}
                onChange={(event) => setGuessedWord(event.target.value)}
                disabled={showRestartBtn}
              ></input>
                <button
                  type="button"
                  id="submit"
                  onClick={guessSubmit}
                  disabled={showRestartBtn}
                >
                  SUMBIT GUESS
                </button>
            {showRestartBtn && (
                <button
                  id="restartBtn"
                  className="restartBtn"
                  type="button"
                  onClick={restartGame}
                >
                  Play Again!
                </button>
            )}
          </form>
    </main>
  );
}
