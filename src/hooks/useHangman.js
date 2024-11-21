import {useState, useEffect, useMemo} from "react";
import words from "../words";

export default function useHangman() {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wordToFind, setWordToFind] = useState(null);
  const [gameStatus, setGameStatus] = useState("playing");
  const [remainingAttempts, setRemainingAttempts] = useState(10);

  const filteredWordToDisplay = useMemo(() => {
    return wordToFind
      ? wordToFind
        .split("")
        .map(letter => guessedLetters.includes(letter) ? letter : "_")
        .join(" ")
      : "";
  }, [guessedLetters, wordToFind]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setWordToFind(words[randomIndex]);

    console.debug("Word to find:", words[randomIndex]);
  }, [])

  const tryLetter = (letter) => {
    setGuessedLetters([...guessedLetters, letter]);

    if (!wordToFind.includes(letter)) {
      setRemainingAttempts(remainingAttempts - 1);
    }

    if (remainingAttempts - 1 === 0) {
      setGameStatus("lost");
      //TODO
    }
  }

  return {
    filteredWordToDisplay, tryLetter, guessedLetters, gameStatus, remainingAttempts
  }
}
