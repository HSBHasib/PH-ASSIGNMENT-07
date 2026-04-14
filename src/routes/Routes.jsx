import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootPage from "../layout/RootPage";
import HomePage from "../pages/HomePage/HomePage";
import TimeLine from "../pages/TimeLine/TimeLine";
import Stats from "../pages/Stats/Stats";
import FriendDetails from "../pages/FriendAbout/FriendAbout";
import FriendAbout from "../pages/FriendAbout/FriendAbout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  { 
    path: '/', 
    Component: RootPage,
    children: [
        {
            index:true,
            Component: HomePage,
        },
        {path:'/timeline', Component: TimeLine},
        {path:'/stats', Component: Stats},
        {   
            path:'/friendAbout/:id',
            loader: () => fetch('/friends.json'), 
            Component: FriendAbout
        },
    ],
    errorElement: <ErrorPage />
  },
]);

