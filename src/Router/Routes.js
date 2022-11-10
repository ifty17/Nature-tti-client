import Login from "../LoginAuthentication/Login";
import SignUp from "../LoginAuthentication/SignUp";
import Error from "../Pages/Error/Error";
import Blogs from "../Pages/Services/Blogs";
import DetailService from "../Pages/Services/DetailService";
import EditReview from "../Pages/Services/EditReview";
import MyReviews from "../Pages/Services/MyReviews";
import MyServices from "../Pages/Services/MyServices";
import Services from "../Pages/Services/Services";
import UserReview from "../ReviewOfService/UserReview";
import PrivateRoute from "./PrivateRoute";

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
        // loader: () => fetch("http://localhost:5000/services"),
        element: <Services></Services>,
      },
      {
        path: "/services/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
        element: <DetailService></DetailService>,
      },
      {
        path: "/myservices",
        element: (
          <PrivateRoute>
            <MyServices></MyServices>
          </PrivateRoute>
        ),
      },
      {
        path: "/myreviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/userReviews",
        element: <UserReview></UserReview>,
      },
      {
        path: "*",
        element: <Error></Error>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/updateReview/:id",
        element: <EditReview></EditReview>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/updateReview/${params.id}`),
      },
    ],
  },
]);

export default router;