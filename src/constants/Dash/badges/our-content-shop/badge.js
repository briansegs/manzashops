import { section01Categories } from "./sections/section01/section01Categories";
import { section02Categories } from "./sections/section02/section02Categories";
import { section03Categories } from "./sections/section03/section03Categories";
import { section04Categories } from "./sections/section04/section04Categories";
import { section05Categories } from "./sections/section05/section05Categories";
import { section06Categories } from "./sections/section06/section06Categories";
import { section07Categories } from "./sections/section07/section07Categories";
import { content } from "./content";

export const ourContentShop = {
  title: "Our Content Shop",
  id: "our-content-shop",
  btnImg: "/manzashops/assets/badge/YouTube Thumbnail-4.png",
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
    {
      id: "adSec0001",
      ad: true,
      sectionName: "Ads 1",
      ads: {
        ad01: {
          href: "/",
          img: "/manzashops/assets/ad/clothes2.png",
          alt: "ad 1",
        },
        ad02: {
          href: "/",
          img: "/manzashops/assets/ad/ads2.jpeg",
          alt: "ad 2",
        },
        ad03: {
          href: "/",
          img: "/manzashops/assets/ad/ads3.jpeg",
          alt: "ad 3",
        },
        ad04: {
          href: "/",
          img: "/manzashops/assets/ad/ads4.jpeg",
          alt: "ad 4",
        },
        ad05: {
          id: "qvadrow0001",
          href: "/",
          img: "/manzashops/assets/ad/styles.jpeg",
          alt: "ad 5",
        },
        ad06: {
          id: "qvadrow0002",
          href: "/",
          img: "/manzashops/assets/ad/collection1.jpeg",
          alt: "ad 6",
        },
        ad07: {
          id: "qvadrow0003",
          href: "/",
          img: "/manzashops/assets/ad/perfume2.jpeg",
          alt: "ad 7",
        },
        ad08: {
          href: "/",
          img: "/manzashops/assets/ad/clothes.jpeg",
          alt: "ad 8",
        },
        ad09: {
          href: "/",
          img: "/manzashops/assets/ad/xboxad.jpeg",
          alt: "ad 8",
        },
        ad10: {
          href: "/",
          img: "/manzashops/assets/ad/playstationad1.jpeg",
          alt: "ad 8",
        },
        ad11: {
          href: "/",
          img: "/manzashops/assets/ad/game1.jpeg",
          alt: "ad 8",
        },
        ad12: {
          href: "/",
          img: "/manzashops/assets/ad/tech.jpeg",
          alt: "ad 8",
        },
      },
    },
  ],
};
