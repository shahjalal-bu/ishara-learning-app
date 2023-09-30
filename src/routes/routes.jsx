import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/Home/HomePage/HomePage";
import Login from "../pages/Login/Login";
import CourseDetailsPage from "../pages/CourseDetailsPage/CourseDetailsPage/CourseDetailsPage";
import AddClass from "../pages/InstructorPage/AddCourse/AddCourse";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import Overview from "../pages/Overview/Overview";

//instructor routes
const instructorRoute = [
  {
    path: "add-course",
    element: (
      // <InstructorRoute>
      <AddClass />
      // </InstructorRoute>
    ),
  },
  // {
  //   path: "my-created-class",
  //   element: (
  //     // <InstructorRoute>
  //       <CreatedClasse />
  //     // </InstructorRoute>
  //   ),
  // },
  // {
  //   path: "my-update-class/:classId",
  //   element: (
  //     // <InstructorRoute>
  //       <UpdateClass />
  //     // </InstructorRoute>
  //   ),
  // },
];

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
        path: "/course-details/:courseId",
        element: <CourseDetailsPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: (
          <PrivateRoute>
            <Overview />
          </PrivateRoute>
        ),
      },
      ...instructorRoute,
    ],
  },
]);

export default routes;
