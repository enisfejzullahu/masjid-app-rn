import * as React from "react";
import Svg, { Path } from "react-native-svg";
const AvailabilityIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      stroke="#3C3C3C"
      strokeMiterlimit={10}
      d="M1.56 6.94c0-3.14 2.55-5.69 5.69-5.69 3.14 0 5.69 2.55 5.69 5.69 0 3.14-2.55 5.69-5.69 5.69-1.15 0-2.21-.34-3.1-.92"
    />
    <Path fill="#3C3C3C" d="M1.56 9.25 0 6.65h3.12l-1.56 2.6Z" />
    <Path
      fill="#3C3C3C"
      stroke="#3C3C3C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.5}
      d="m7.25 2.51.3 4.37h-.59l.29-4.37Z"
    />
    <Path
      fill="#3C3C3C"
      stroke="#3C3C3C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.5}
      d="M9.59 9.15 6.97 6.87l.33-.34 2.29 2.62Z"
    />
  </Svg>
);
export default AvailabilityIcon;
