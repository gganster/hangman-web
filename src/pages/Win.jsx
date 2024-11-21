import { Link } from "react-router-dom"
import { Button } from "@/components/ui/Button"

export default function Win() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center h-screen w-screen">
      <h2 className="text-4xl">
        You won!
      </h2>
      <Link to="/">
        <Button variant="outline">
          Play again
        </Button>
      </Link>
    </div>
  )
}