import { Component } from "react";
import { routes } from "../constants/routes";
import AllKanji from "../pages/allKanji/AllKanji";
import Home from "../pages/home/Home";
import KanjiDetails from "../pages/kanjiDetails/KanjiDetails";
import KanjiPerGrade from "../pages/kanjiPerGrade/KanjiPerGrade";
import SeeKanji from "../pages/seeKanji/SeeKanji";
import About from "../pages/about/About";

export const appRoutes = [
  { path: routes.home, Component: Home },

  {
    path: routes.seeKanji,
    Component: SeeKanji,
  },

  {
    path: routes.kanjiDetails,
    Component: KanjiDetails,
  },
  {
    path: routes.allKanji,
    Component: AllKanji,
  },
  {
    path: routes.gradeKanji,
    Component: KanjiPerGrade,
  },
  {
    path: routes.about,
    Component: About,
  },
];
