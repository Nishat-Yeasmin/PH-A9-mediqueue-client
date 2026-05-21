import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/Home/page";
import LoginPage from "../pages/Login/page";
import RegisterPage from "../pages/Register/page";
import PrivateRoute from "./PrivateRoute";
import AddTutor from "../pages/AddTutor/page";
import MyTutors from "../pages/MyTutors/page";
import MyBookedSessions from "../pages/MyBookedSessions/page";
import TutorsPage from "../pages/Tutors/page";
import ErrorPage from "../pages/ErrorPage/page";
import TutorDetailsPage from "../pages/TutorDetails/page";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <HomePage/>,
            },
            {
                path: "/tutors",
                 element: <TutorsPage />,
          },
            {
                path: "/login",
                element: <LoginPage/>,
            },
            {
                path: "/register",
                element: <RegisterPage/>,
            },
            {
  path: "/tutors/:id",
  element: (
    <PrivateRoute>
      <TutorDetailsPage />
    </PrivateRoute>
  ),
},
            {
                path: "/addTutor",
                element: (
                    <PrivateRoute>
                        <AddTutor />
                    </PrivateRoute>
                ),
            },
            {
                path: "/myTutors",
                element: (
                    <PrivateRoute>
                        <MyTutors />
                    </PrivateRoute>
                ),
            },
            {
                path: "/myBookedSessions",
                element: (
                    <PrivateRoute>
                        <MyBookedSessions />
                    </PrivateRoute>
                ),
            },
        ],
    },
]);