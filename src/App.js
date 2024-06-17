import Head from "./components/header/Head";
import Body from "./components/body/Body";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BodyContainer from "./components/body/body container/BodyContainer";
import WatchPage from "./components/watch page/WatchPage";
import SearchList from "./components/search list/SearchList";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <BodyContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
        {
          path: "/results",
          element: <SearchList />,
        },
      ],
    },
  ]);
  return (
    <div className="overflow-x-hidden">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
