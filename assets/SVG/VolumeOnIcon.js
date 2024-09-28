import * as React from "react";
import Svg, { Path } from "react-native-svg";
const VolumeOnIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={19}
    fill="none"
    {...props}
  >
    <Path fill="#06A85D" d="M9.74 5.08H0v8.84h9.74V5.08Z" />
    <Path fill="#06A85D" d="m17.258 0-.18 19L1.234 9.326 17.258 0Z" />
    <Path
      stroke="#06A85D"
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="M19.098 3.062s3.972 5.266 0 12.899M22.172 1.253s5.095 6.727 0 16.517"
    />
  </Svg>
);
export default VolumeOnIcon;
