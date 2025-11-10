import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import TestPage from "./pages/TestPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <TestPage />,
  },
]);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
