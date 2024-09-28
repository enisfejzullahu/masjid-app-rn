import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BellIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#06A85D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M13.73 21a2 2 0 0 1-3.46 0M18 8A6 6 0 1 0 6 8c0 7-3 9-3 9h18s-3-2-3-9Z"
    />
  </Svg>
);
export default BellIcon;
