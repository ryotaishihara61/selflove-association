
import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Membership from "../pages/membership/page";
import MemberRules from "../pages/member-rules/page";
import Donation from "../pages/donation/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/membership",
    element: <Membership />,
  },
  {
    path: "/member-rules",
    element: <MemberRules />,
  },
  {
    path: "/donation",
    element: <Donation />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
