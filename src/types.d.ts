export interface Range {
  start?: number;
  end: number;
}

export interface Dimensions {
  length: number;
  width: number;
  height: number;
}

export interface BaseProps {
  lengths: Dimensions["length"][];
  widths: Dimensions["width"][];
  heights: Dimensions["height"][];
}

export interface HelperProps extends BaseProps {
  n: number; // current index
  cache: Dimensions["height"][];
}
