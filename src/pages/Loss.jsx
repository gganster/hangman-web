import { useParams } from "react-router-dom";
import {Badge} from "@/components/ui/Badge";

export default function Loss() {
  const { word } = useParams();

  return (
    <div className="flex flex-col gap-8 justify-center items-center h-screen w-screen">
      <h2 className="text-4xl">
        You lost!
      </h2>
      <h3 className="">
        The word was: <Badge>{word}</Badge>
      </h3>
    </div>
  )
}