import * as React from "react"
import Svg, { Circle } from "react-native-svg"
const Dots = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={21}
    fill="none"
    {...props}
  >
    <Circle cx={2.5} cy={2.5} r={2.5} fill="#06A85D" />
    <Circle cx={2.5} cy={10.5} r={2.5} fill="#06A85D" />
    <Circle cx={2.5} cy={18.5} r={2.5} fill="#06A85D" />
    <Circle cx={10.5} cy={2.5} r={2.5} fill="#06A85D" />
    <Circle cx={10.5} cy={10.5} r={2.5} fill="#06A85D" />
    <Circle cx={10.5} cy={18.5} r={2.5} fill="#06A85D" />
  </Svg>
)
export default Dots
