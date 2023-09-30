import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/Home/HomePage/HomePage";
import Login from "../pages/Login/Login";
import CourseDetailsPage from "../pages/CourseDetailsPage/CourseDetailsPage/CourseDetailsPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/course-details",
        element: <CourseDetailsPage />,
      },
    ],
  },
]);

export default routes;
