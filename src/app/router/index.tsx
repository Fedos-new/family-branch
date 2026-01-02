import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "@/pages/login";
import { AppPage } from "@/pages/app";

export const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  { path: "/app", element: <AppPage /> },
]);
