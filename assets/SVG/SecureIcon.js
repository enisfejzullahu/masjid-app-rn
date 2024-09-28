import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SecureIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16.455 10.35H1.545v7.963h14.91V10.35Z"
    />
    <Path
      stroke="#fff"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M4.73 6.524v3.8h8.54v-3.8"
    />
    <Path
      stroke="#fff"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M4.73 6.74c0-2.79 1.909-5.066 4.275-5.066 2.367 0 4.276 2.263 4.276 5.066"
    />
  </Svg>
)
export default SecureIcon
