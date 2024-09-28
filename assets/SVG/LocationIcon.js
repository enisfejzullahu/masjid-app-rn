import * as React from "react"
import Svg, { Path, Ellipse } from "react-native-svg"
const LocationIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      fill="#3C3C3C"
      d="M10 4.9c0 2.706-2.857 4.9-5 9.1-2.143-4.2-5-6.394-5-9.1C0 2.194 2.239 0 5 0s5 2.194 5 4.9Z"
    />
    <Ellipse cx={5} cy={4.9} fill="#fff" rx={2.143} ry={2.1} />
  </Svg>
)
export default LocationIcon
