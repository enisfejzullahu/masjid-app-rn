import * as React from "react";
import Svg, { Path } from "react-native-svg";
const HelpIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      stroke="#06A85D"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M20.263 13.826v-5.29M5.737 8.536v5.29M5.737 8.822c0-3.903 3.256-7.068 7.263-7.068s7.263 3.165 7.263 7.068M5.737 14.324h3.138c.235 0 .442.196.442.452v8.018a.448.448 0 0 1-.442.452H5.737v-8.922ZM17.125 14.324h3.124v8.907h-3.124a.44.44 0 0 1-.442-.452v-8.003a.44.44 0 0 1 .442-.452Z"
    />
  </Svg>
);
export default HelpIcon;
