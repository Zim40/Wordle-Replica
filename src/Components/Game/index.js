import React from "react";
import { words } from "../../wordList/wordList";

// Test code for random word value.
const randomIndex = Math.floor(Math.random() * words.length);
const randomWord = words[randomIndex];
console.log(randomWord);

export default function Game() {
  // Game code here
  return (
    <main>
        <h4>{randomWord}</h4>
    </main> 
  )
}
