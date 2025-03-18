import { createBrowserRouter } from "react-router-dom";
import Leagues from "../pages/Leagues";
import Sports from "../pages/Sports";
import Casino from "../pages/Casino";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import MatchDetails from "../pages/MatchDetails";
import ActivityLogs from "../pages/ActivityLogs";
import MyProfile from "../pages/MyProfile";
import HomePage from "../pages/HomePage";
import DepositPage from "../pages/DepositPage";
import PaymentTransferLogPage from "../pages/PaymentTransferLogPage";
import UplineWPNumber from "../pages/UplineWPNumber";
import BalanceOverViewPage from "../pages/BalanceOverViewPage";
import CurrentBetsPage from "../pages/CurrentBetsPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/leagues",
    element: <Leagues />,
  },
  {
    path: "/sports",
    element: <Sports />,
  },
  {
    path: "/casino",
    element: <Casino />,
  },
  {
    path: "/match-details/:id",
    element: <MatchDetails />,
  },
  {
    path: "/activity-logs",
    element: <ActivityLogs />,
  },
  {
    path: "/my-profile",
    element: <MyProfile />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/log-in",
    element: <LoginPage />,
  },
  {
    path: "/menu",
    children: [
      {
        path: "deposit",
        element: <DepositPage />,
      },
      {
        path: "payment-transfer-log",
        element: <PaymentTransferLogPage />,
      },
      {
        path: "upline-wp-number",
        element: <UplineWPNumber />,
      },
      {
        path: "balance-overview",
        element: <BalanceOverViewPage />,
      },
      {
        path: "current-bets",
        element: <CurrentBetsPage />,
      },
    ],
  },
]);
