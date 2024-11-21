import {useState} from "react";
import useHangman from "../hooks/useHangman";
import {Input} from "@/components/ui/Input";
import {Button} from "@/components/ui/Button";
import { Check } from "lucide-react";
import {Badge} from "@/components/ui/Badge";

export default function Home() {
  const {
    filteredWordToDisplay,
    tryLetter,
    guessedLetters,
    gameStatus,
    remainingAttempts
  } = useHangman();
  const [letter, setLetter] = useState("");

  const handleGuessLetter = () => {
    setLetter("");
    tryLetter(letter);
  }

  return (
    <div className="flex flex-col gap-8 justify-center items-center h-screen w-screen">
      <div className="">
        <h2 className="text-4xl">
          {filteredWordToDisplay}
        </h2>
      </div>
      <div className="flex gap-2">
        <Input 
          value={letter} 
          onChange={e => {
          setLetter(e.target.value[e.target.value.length - 1]);
          }} 
          className="w-12"
          onKeyDown={e => {
            if (e.key === "Enter") {
              handleGuessLetter();
            }
          }}
        />
        <Button variant="outline" onClick={handleGuessLetter}>
          <Check />
        </Button>
      </div>
      <div>
        <span>(Remaining attempts: <Badge>{remainingAttempts}</Badge>)</span>
      </div>
    </div>
  )
}