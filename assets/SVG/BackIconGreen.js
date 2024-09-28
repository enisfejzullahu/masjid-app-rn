import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BackIconGreen = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={30}
    fill="none"
    {...props}
  >
    <Path
      fill="#06A85D"
      d="M2.88 15.168 1.114 13.4a2.5 2.5 0 0 0 0 3.536l1.768-1.768Zm14.496 10.96L4.648 13.4l-3.535 3.536L13.84 29.664l3.535-3.536ZM4.648 16.936 17.376 4.208 13.841.673 1.113 13.4l3.535 3.536Z"
    />
  </Svg>
);
export default BackIconGreen;
