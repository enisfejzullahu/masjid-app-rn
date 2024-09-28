import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const ContactIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={13}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        stroke="#3C3C3C"
        strokeMiterlimit={10}
        d="M3.163.79c1.013.1 1.887 1.602 1.743 2.772-.096.796-.596.853-.706 1.586-.24 1.58 1.694 3.775 3.134 3.572.663-.093.725-.618 1.484-.743 1.09-.182 2.481.655 2.616 1.685.115.904-.73 1.97-1.613 2.308-3.207 1.233-9.879-6.042-8.717-9.49.307-.904 1.224-1.773 2.06-1.69Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h12v13H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default ContactIcon;
