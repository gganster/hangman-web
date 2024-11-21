import { useParams } from "react-router-dom";
import {Badge} from "@/components/ui/Badge";
import {Button} from "@/components/ui/Button";
import Hangman from "../components/Hangman";
import { Link } from "react-router-dom";

export default function Loss() {
  const { word } = useParams();

  return (
    <div className="flex flex-col gap-8 justify-center items-center h-screen w-screen">
      <Hangman count={10} />
      <h2 className="text-4xl">
        You lost!
      </h2>
      <h3 className="">
        The word was: <Badge>{word}</Badge>
      </h3>
      <Link to="/">
        <Button variant="outline">
          Play again
        </Button>
      </Link>
    </div>
  )
}