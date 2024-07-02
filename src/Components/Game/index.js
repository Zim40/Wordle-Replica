import React, { useState, useEffect } from "react";
// import { words } from "../../wordList/wordList";

export default function Game() {
  // Assign states
  const [correctWord, setCorrectWord] = useState(""); // Correct Word
  const [showRestartBtn, setShowRestartBtn] = useState(false); // Restart Button
  const [guessedWord, setGuessedWord] = useState([]); // Guessed word
  const [invalidGuess, setInvalidGuess] = useState(""); // Invalid guess
  const [displayWord, setDisplayWord] = useState(""); // Display word after correct guess
  const [restartCount, setRestartCount] = useState(0); // Restart State Counter
  const [guesses, setGuesses] = useState([]); //Guess State Counter
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.datamuse.com/words?sp=?????&max=50");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const word = await response.json();

        const randomIndex = Math.floor(Math.random() * word.length);
        const randomWord = word[randomIndex];

        // Set Target Word before game starts
        setCorrectWord(randomWord.word);
        console.log(randomWord);
      } catch (error) {
        console.log("There was a problem with the fetch operation:", error);
      }
    };
    fetchData();
  }, [restartCount]);

  // submit guess function.
  const guessSubmit = (event) => {
    event.preventDefault();

    const currentGuessedWord = guessedWord.trim().toLowerCase();
    if (currentGuessedWord.length !== 5) {
      setInvalidGuess("Guess must be 5 characters")
      setTimeout(() => {
         setInvalidGuess("");
         
      }, 3000);
      return;
      
    }
    console.log(guessedWord);
    setGuessedWord(guessedWord);

    // Check if word matches Target Word.
    if (currentGuessedWord === correctWord.toLowerCase()) {
      setDisplayWord(correctWord);

      // Flips restart button Boolean to reveal button if guess correct.
      if (!showRestartBtn) {
        setShowRestartBtn(true);
      }
      // Incorrect guess resets useStates
    } else if (guessedWord !== correctWord) {
      console.log("try again");
      setShowRestartBtn(false);
      // setGuessedWord("");
      setDisplayWord("");
    }
    const feedback = Array(5).fill("gray");
    for (let i = 0; i < correctWord.length; i++) {
      if (guessedWord[i] === correctWord[i]) {
        feedback[i] = "green";
      } else if (correctWord.includes(guessedWord[i])) {
        feedback[i] = "amber";
      }
    }
    if (guesses.length === 5) {
      
      setGameOver(true);
      setShowRestartBtn(true);
    
    }
    setGuesses([...guesses, { guess: guessedWord, feedback }]);
    setGuessedWord("");
  };

  // Restart Game function
  const restartGame = () => {
    // Test code for random word value.
    // const randomIndex = Math.floor(Math.random() * word.length);
    // const randomWord = word[randomIndex];

    console.log("restart initiated");
    setTimeout(() => {
      setGuesses([]);
    }, 1000);

    setShowRestartBtn(false);
    setGuessedWord("");
    setCorrectWord("");
    setDisplayWord("");
    setGameOver(false);
    setRestartCount((prevCount) => prevCount + 1);
  };

  return (
    <main className="main--game">
      <div>
        {gameOver  ?  (
          <div>Game Over! You've reached the maximum number of guesses.
            <p>{displayWord}</p>
          </div>
          
          
          
        ) : (
          <div>
            {guesses.map((guessObj, index) => (
              <div key={index} className="row">
                {guessObj.feedback.map((color, i) => (
                  <div
                    key={i}
                    className={`cell ${color}`}
                    style={{ fontWeight: "bold", color: "white" }}
                  >
                    {guessObj.guess[i].toUpperCase()}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
      <hr></hr>
      {/* guessed correct word */}
      <p className="correctWord" id="correctWord">
        {displayWord.toUpperCase()}
        {invalidGuess.toUpperCase()}
      </p>

      <form id="form" onSubmit={guessSubmit}>
        {/* user input */}
        <input
          autoComplete="off"
          className="textArea"
          id="textArea"
          placeholder={invalidGuess}
          value={guessedWord}
          onChange={(event) => setGuessedWord(event.target.value)}
          disabled={showRestartBtn}
        ></input>
        <button
          type="submit"
          id="submit"
          onClick={guessSubmit}
          disabled={showRestartBtn}
        >
          Guess
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
