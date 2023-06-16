import { BaseProps, Dimensions } from "./types";

const pick =
  <T, U extends keyof T>(key: U) =>
  (value: T) =>
    value[key];

export const buildInput = (boxes: Dimensions[]): BaseProps => ({
  lengths: boxes.map(pick("length")),
  widths: boxes.map(pick("width")),
  heights: boxes.map(pick("height"))
});
