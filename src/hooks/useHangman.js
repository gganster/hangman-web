import {useState, useEffect, useMemo} from "react";
import words from "../words";
import { useNavigate } from "react-router-dom";

export default function useHangman() {
  const navigate = useNavigate();
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
    const _guessedLetter = [...guessedLetters, letter];
    setGuessedLetters(_guessedLetter);

    if (!wordToFind.includes(letter)) {
      setRemainingAttempts(remainingAttempts - 1);
    }

    if (remainingAttempts - 1 === 0) {
      setGameStatus("lost");
      navigate(`/loss/${wordToFind}`);
    }

    //check if win
    console.log("here");
    if (wordToFind.split("").every(letter => _guessedLetter.includes(letter))) {
      setGameStatus("won");
      navigate("/win");
    }
  }

  return {
    filteredWordToDisplay, tryLetter, guessedLetters, gameStatus, remainingAttempts
  }
}
