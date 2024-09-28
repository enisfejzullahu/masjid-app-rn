import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SaveIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={31}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinejoin="round"
      strokeWidth={3}
      d="m9.549 21.229-8.049 6.6V1.5h18v26.33l-8.049-6.601a1.5 1.5 0 0 0-1.902 0Z"
    />
  </Svg>
);
export default SaveIcon;
