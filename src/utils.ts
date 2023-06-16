import { BaseProps, Dimensions, Range } from "./types";

export const random = ({ start = 0, end }: Range) =>
  Math.floor(Math.random() * (end - start + 1)) + start;

const pick =
  <T, U extends keyof T>(key: U) =>
  (value: T) =>
    value[key];

export const buildInput = (boxes: Dimensions[]): BaseProps => ({
  lengths: boxes.map(pick("length")),
  widths: boxes.map(pick("width")),
  heights: boxes.map(pick("height"))
});
