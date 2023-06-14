interface Dimensions {
  length: number;
  width: number;
  height: number;
}

interface BaseProps {
  lengths: Dimensions["length"][];
  widths: Dimensions["width"][];
  heights: Dimensions["height"][];
}

interface HelperProps extends BaseProps {
  n: number; // current index
  cache: Dimensions["height"][];
}
