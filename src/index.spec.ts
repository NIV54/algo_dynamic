import { buildInput } from "./utils";

import { highestStableTower } from "./";

describe("Main Logic", () => {
  const input: Dimensions[] = [
    {
      length: 4,
      width: 4,
      height: 34
    },
    {
      length: 5,
      width: 3,
      height: 50
    },
    {
      length: 2,
      width: 2,
      height: 15
    }
  ];

  const input1: Dimensions[] = [
    {
      length: 4,
      width: 4,
      height: 10
    },
    {
      length: 2,
      width: 2,
      height: 15
    }
  ];
  const input2: Dimensions[] = [
    {
      length: 3,
      width: 1,
      height: 10
    },
    {
      length: 2,
      width: 2,
      height: 15
    }
  ];
  const input3: Dimensions[] = [
    {
      length: 4,
      width: 4,
      height: 40
    },
    {
      length: 5,
      width: 5,
      height: 50
    },
    {
      length: 2,
      width: 2,
      height: 15
    }
  ];
  const input4: Dimensions[] = [
    {
      length: 4,
      width: 4,
      height: 40
    },
    {
      length: 5,
      width: 5,
      height: 50
    },
    {
      length: 5,
      width: 5,
      height: 45
    },
    {
      length: 2,
      width: 2,
      height: 15
    }
  ];

  it.each<[Dimensions[], number]>([
    [input1, 25],
    [input2, 15],
    [input3, 105]
  ])("should return highest stable tower", (input, expected) => {
    const result = highestStableTower(buildInput(input));
    expect(result).toEqual(expected);
  });

  it.skip("should return highest stable tower with similar boxes", () => {
    const result = highestStableTower(buildInput(input));
    expect(result).toEqual(150);
  });
});
