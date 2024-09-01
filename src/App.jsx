import AboutUs from "./pages/AboutUs/AboutUs";
import Events from "./pages/HomePage/event/Events";
import EventsInside from "./pages/HomePage/event/Events_inside";
import Home from "./pages/HomePage/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sponser from "./pages/Sponser/Sponser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/event",
    element: <Events />,
  },
  {
    path: "/event/in",
    element: <EventsInside />,
  },
  {
    path: "/aboutUs",
    element: <AboutUs />,
  },
  {
    path: "/sponser",
    element: <Sponser />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
