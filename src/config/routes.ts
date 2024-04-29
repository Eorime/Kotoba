import { routes } from "../constants/routes";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import KanjiDetails from "../pages/kanjiDetails/KanjiDetails";

export const appRoutes = [
  { path: routes.home, Component: Home },

  {
    path: routes.about,
    Component: About,
  },

  {
    path: routes.kanjiDetails,
    Component: KanjiDetails,
  },
];
