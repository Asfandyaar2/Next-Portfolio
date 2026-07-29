import { projects } from "@/data";

export type Project = (typeof projects)[number];

export const splitTitle = (title: string) => {
  const words = title.trim().split(" ");
  const last = words.pop() ?? "";
  return { lead: words.join(" "), last };
};
