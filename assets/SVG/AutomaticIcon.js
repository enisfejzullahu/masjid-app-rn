import * as React from "react";
import Svg, { Path } from "react-native-svg";
const AutomaticIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#06A85D"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M3.957 12c0-5.815 4.833-10.537 10.784-10.537 5.952 0 10.785 4.722 10.785 10.537S20.693 22.537 14.74 22.537c-2.18 0-4.189-.63-5.875-1.704"
    />
    <Path fill="#06A85D" d="m4 18-4-7h8l-4 7Z" />
    <Path
      stroke="#06A85D"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m10.477 11.833 3.052 2.982"
    />
    <Path
      stroke="#06A85D"
      strokeLinecap="square"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="m13.529 14.815 6.577-6.408"
    />
  </Svg>
);
export default AutomaticIcon;
