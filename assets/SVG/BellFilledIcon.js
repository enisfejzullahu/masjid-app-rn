import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BellFilledIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      fill="#06A85D"
      d="M18.75 8.333a6.25 6.25 0 0 0-12.5 0c0 7.292-3.125 9.375-3.125 9.375h18.75s-3.125-2.083-3.125-9.375ZM14.302 21.875a2.083 2.083 0 0 1-3.604 0"
    />
    <Path
      stroke="#06A85D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.302 21.875a2.083 2.083 0 0 1-3.604 0M18.75 8.333a6.25 6.25 0 0 0-12.5 0c0 7.292-3.125 9.375-3.125 9.375h18.75s-3.125-2.083-3.125-9.375Z"
    />
  </Svg>
);
export default BellFilledIcon;
