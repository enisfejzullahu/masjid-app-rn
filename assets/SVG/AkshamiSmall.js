import * as React from "react"
import Svg, { Path } from "react-native-svg"
const AkshamiSmall = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#06A85D"
      d="M23.165 12.187H.097C.097 6.017 5.257 1 11.62 1c6.363 0 11.523 5.016 11.523 11.187h.022Z"
    />
    <Path
      stroke="#06A85D"
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="M2.35 14.54h18.454M4.667 16.893h13.819M6.832 19.223h9.227"
    />
  </Svg>
)
export default AkshamiSmall
