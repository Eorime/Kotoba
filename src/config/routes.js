import { Component } from "react";
import { routes } from "../constants/routes";
import AllKanji from "../pages/allKanji/AllKanji";
import Home from "../pages/home/Home";
import KanjiDetails from "../components/kanjiDetails/KanjiDetails";
import KanjiPerGrade from "../pages/kanjiPerGrade/KanjiPerGrade";
import SeeKanji from "../pages/seeKanji/SeeKanji";
import About from "../pages/about/About";
import Resources from "../pages/resources/Resources";
import JoyoKanji from "../pages/kanjiGroups/kanjiJoyo/JoyoKanji";
import JinmeyoKanji from "../pages/kanjiGroups/kanjiJinmeyo/JinmeyoKanji";

export const appRoutes = [
  { path: routes.home, Component: Home },

  {
    path: routes.seeKanji,
    Component: SeeKanji,
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
  {
    path: routes.resources,
    Component: Resources,
  },
  {
    path: routes.kanjiJoyo,
    Component: JoyoKanji,
  },
  {
    path: routes.kanjiJinmeyo,
    Component: JinmeyoKanji,
  },
  {
    path: routes.kanjiDetails,
    Component: KanjiDetails,
  },
];
