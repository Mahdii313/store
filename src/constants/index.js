import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const DATABASE_KEY =
  "mongodb+srv://MahdiRostami:tNRNMPjEK8OP3ZzR@cluster0.wsqhvmr.mongodb.net/";
export const COOKIE_NAME = "jwt";
export const COOKIE_SECRET = "Mohaddethin secret";
export const MAX_AGE = 60 * 60 * 24 * 7; // 7 days
export const MENU_ITEMS = [
  {
    title: "درباره",
    link: "/about",
  },
  {
    title: "کیک ها",
    link: "/products/cakes",
  },
  {
    title: "صابون ها",
    link: "/products/soaps",
  },
  {
    title: "گل مصنوعی",
    link: "/products/flowers",
  },
  {
    title: "صنایع دستی",
    link: "products/handicrafts",
  },
];
export const SOCIALS = [
  {
    icon: <FaTelegram />,
    link: "/",
  },
  {
    icon: <FaFacebook />,
    link: "/",
  },
  {
    icon: <FaInstagram />,
    link: "/",
  },
];

export const PICTURES = [
  "cake.jpg",
  "curtain.jpg",
  "flower.webp",
  "handicraft.jpg",
  "handicraft2.jpeg",
  "handicraft3.webp",
  "handicraft4.jpg",
  "handicraft5.jpg",
  // "handicraft6.jpg",
  // "handicraft7.webp",
  // "handicraft8.webp",
  "knitting1.jpg",
  "knitting2.jpg",
  "soap1.webp",
  "soap2.webp",
];
