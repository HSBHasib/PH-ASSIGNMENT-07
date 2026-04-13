import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootPage from "../layout/RootPage";
import HomePage from "../pages/HomePage/HomePage";
import TimeLine from "../pages/TimeLine/TimeLine";
import Stats from "../pages/Stats/Stats";

export const router = createBrowserRouter([
  { 
    path: "/", 
    Component: RootPage,
    children: [
        {
            index:true,
            loader: () => fetch('friends.json'),
            Component: HomePage
        },
        {path:'/timeline', Component: TimeLine},
        {path:'/stats', Component: Stats},
    ],
  },
]);