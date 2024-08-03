import {  clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function Util(...inputs) {
  return twMerge(clsx(inputs));
}
