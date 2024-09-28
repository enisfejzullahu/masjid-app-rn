import * as React from "react";
import Svg, { Path } from "react-native-svg";
const PamjaIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={27}
    fill="none"
    {...props}
  >
    <Path
      stroke="#06A85D"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M2.641 13.491H1.605M4.818 6.767l-.847-.61M10.502 2.62l-.329-1.01M17.516 2.62l.31-1.01M23.182 6.767l.847-.61M25.359 13.491h1.036M23.182 20.233l.847.61M17.516 24.38l.31 1.01M10.502 24.38l-.329 1.01M4.818 20.233l-.847.61"
    />
    <Path
      stroke="#06A85D"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M14.009 20.983c4.102 0 7.428-3.354 7.428-7.492C21.437 9.354 18.111 6 14.01 6 9.906 6 6.58 9.354 6.58 13.491c0 4.138 3.326 7.492 7.429 7.492Z"
    />
  </Svg>
);
export default PamjaIcon;
