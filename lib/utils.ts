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
