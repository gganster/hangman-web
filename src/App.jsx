import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Loss from "./pages/Loss";
import Win from "./pages/Win";

const router = createBrowserRouter([
  {path: "/", element: <Home />},
  {path: "/win", element: <Win />},
  {path: "/loss/:word", element: <Loss />}
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}