import { BaseProps, Dimensions, HelperProps, Range } from "./types";
import { buildInput, random } from "./utils";

const helper = ({ n, cache, ...props }: HelperProps): number => {
  const { lengths, widths, heights } = props;
  if (cache[n] !== -1) {
    return cache[n];
  }

  const currentDimensions: Dimensions = {
    length: lengths[n],
    width: widths[n],
    height: heights[n]
  };

  const towerHeights: number[] = Array(lengths.length).fill(-1);

  for (let i = 0; i < lengths.length; i++) {
    if (i == n) continue;
    if (currentDimensions.length > lengths[i] && currentDimensions.width > widths[i]) {
      towerHeights[i] =
        currentDimensions.height +
        helper({
          ...props,
          cache,
          n: i
        });
    }
  }

  // using currentDimensions.height for case where no box can fit atop the current one
  cache[n] = Math.max(...towerHeights, currentDimensions.height);
  return cache[n];
};

export const highestStableTower = (props: BaseProps) => {
  const { lengths, widths, heights } = props;
  if (lengths.length !== widths.length || widths.length !== heights.length) {
    throw new Error("All three arrays must be of same length");
  }
  const cache = Array(lengths.length).fill(-1);

  let max = -1;
  // we must make a call with each box as the bottom box since it might be the best fit
  for (let n = 0; n < lengths.length; n++) {
    max = Math.max(max, helper({ ...props, cache, n }));
  }
  return max;
};

const run = (boxesCount: number, sizeRange: Range) => {
  const boxes: Dimensions[] = Array(boxesCount)
    .fill(boxesCount)
    .map(() => ({
      length: random(sizeRange),
      width: random(sizeRange),
      height: random(sizeRange)
    }));

  console.log("Number of boxes: " + boxesCount);
  console.log(boxes);
  const result = highestStableTower(buildInput(boxes));
  console.log("Highest possible tower: " + result);
};

const sizeRange: Range = { start: 1, end: 200 };

run(20, sizeRange);
run(30, sizeRange);
