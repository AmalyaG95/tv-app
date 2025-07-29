import {
  genres,
  home,
  movies,
  profilePicture,
  search,
  tvShows,
  watchLater,
} from "@/public/assets/icons";

export enum ERole {
  NAV_ITEM = "NAV_ITEM",
  USER_INFO = "USER_INFO",
}

export enum MenuState {
  CLOSED = "closed",
  OPENING = "opening",
  OPEN = "open",
  CLOSING = "closing",
}

export type TLabelWithIcon = {
  url?: string;
  name: string;
  icon: string;
};

export const NAV_ITEMS: TLabelWithIcon[] = [
  { url: "/search", icon: search, name: "Search" },
  { url: "/", icon: home, name: "Home" },
  { url: "/tv-shows", icon: tvShows, name: "TV Shows" },
  { url: "/movies", icon: movies, name: "Movies" },
  { url: "/genres", icon: genres, name: "Genres" },
  { url: "/watch-later", icon: watchLater, name: "Watch Later" },
];

export const USER: TUser = {
  name: "Daniel",
  profilePicture,
};
