import * as React from "react"
import Svg, { Path } from "react-native-svg"
import BellIcon from "./BellIcon"
const BellIcon2 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={27}
    fill="none"
    {...props}
  >
    <Path
      stroke="#06A85D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.446 23.625a2.248 2.248 0 0 1-3.892 0M20.25 9a6.75 6.75 0 0 0-13.5 0c0 7.875-3.375 10.125-3.375 10.125h20.25S20.25 16.875 20.25 9Z"
    />
  </Svg>
)
export default BellIcon2
