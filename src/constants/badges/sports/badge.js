import { section01Categories } from "./categories/section01/section01Categories";
import { section02Categories } from "./categories/section02/section02Categories";
import { section03Categories } from "./categories/section03/section03Categories";
import { section04Categories } from "./categories/section04/section04Categories";
import { section05Categories } from "./categories/section05/section05Categories";
import { section06Categories } from "./categories/section06/section06Categories";
import { section07Categories } from "./categories/section07/section07Categories";
import { content } from "./content";

export const sports = {
  title: "Sports",
  id: "sports",
  btnImg: "/manzashops/assets/badge/gift2.png",
  content: content,
  sections: [
    {
      id: "sec0001",
      sectionName: "main",
      sectionImg: "/manzashops/assets/badge/YouTube Thumbnail-4.png",
      categories: section01Categories,
    },
    {
      id: "sec0002",
      sectionName: "deals",
      sectionImg: "/manzashops/assets/badge/YouTube Thumbnail-5.png",
      categories: section02Categories,
    },
    {
      id: "sec0003",
      sectionName: "new-arrivals",
      sectionImg: "/manzashops/assets/badge/YouTube Thumbnail-6.png",
      categories: section03Categories,
    },
    {
      id: "sec0004",
      sectionName: "popular",
      sectionImg: "/manzashops/assets/badge/YouTube Thumbnail-7.png",
      categories: section04Categories,
    },
    {
      id: "sec0005",
      sectionName: "seasonal",
      sectionImg: "/manzashops/assets/badge/YouTube Thumbnail-2.png",
      categories: section05Categories,
    },
    {
      id: "sec0006",
      sectionName: "clearance",
      sectionImg: "/manzashops/assets/badge/YouTube Thumbnail-3.png",
      categories: section06Categories,
    },
    {
      id: "sec0007",
      sectionName: "recommended",
      sectionImg: "/manzashops/assets/badge/YouTube Thumbnail-2.png",
      categories: section07Categories,
    },
  ],
};