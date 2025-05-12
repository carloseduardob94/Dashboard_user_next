import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const paginationItems = (
  current: number,
  total: number,
  siblings: number = 1
): (number | "...")[] => {
  if (total <= 1) return [1];

  const pages: (number | "...")[] = [];

  const range = (start: number, end: number): number[] =>
    Array.from({ length: end - start + 1 }, (_, i) => start + i);

  const startPages = [1];
  const endPages = [total];

  const siblingStart = Math.max(current - siblings, 2);
  const siblingEnd = Math.min(current + siblings, total - 1);

  const showLeftDots = siblingStart > 2;
  const showRightDots = siblingEnd < total - 1;

  if (showLeftDots) {
    pages.push(...startPages, "...");
  } else {
    pages.push(...range(1, siblingStart - 1));
  }

  pages.push(...range(siblingStart, siblingEnd));

  if (showRightDots) {
    pages.push("...", ...endPages);
  } else {
    pages.push(...range(siblingEnd + 1, total));
  }

  return pages;
};

export const getRandomAge = () => Math.floor(Math.random() * (60 - 18 + 1)) + 18;

export const inferGender = (name: string) =>
  name.toLowerCase().endsWith("a") ? "Mulher" : "Homem";

export const getCurrentDate = () => {
  const now = new Date();
  return now.toLocaleDateString("pt-BR");
};

export const getCurrentTime = () => {
  const now = new Date();
  return now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
};

export const getRandomDuration = () => {
  const minutes = Math.floor(Math.random() * 50) + 10;
  const seconds = Math.floor(Math.random() * 60);
  return `${minutes}m${seconds}s`;
};
