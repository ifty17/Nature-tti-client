import DetailService from "../Pages/Services/DetailService";
import Services from "../Pages/Services/Services";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Pages/Home/Home");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        loader: () => fetch("http://localhost:5000/services"),
        element: <Services></Services>,
      },
      {
        path: "/services/:id",
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
        element: <DetailService></DetailService>
      },
    ],
  },
]);

export default router;