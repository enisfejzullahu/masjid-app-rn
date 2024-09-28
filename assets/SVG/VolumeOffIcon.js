import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const VolumeOffIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={19}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path fill="#06A85D" d="M9.801 5.08H0v8.84h9.801V5.08Z" />
      <Path fill="#06A85D" d="m17.367 0-.18 19L1.241 9.326 17.367 0Z" />
      <Path
        stroke="#06A85D"
        strokeLinecap="round"
        strokeMiterlimit={10}
        d="m19.219 14.407 5.217-9.79M24.436 14.407l-5.217-9.79"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h25v19H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default VolumeOffIcon;
