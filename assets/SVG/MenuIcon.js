import * as React from "react"
import Svg, { Rect } from "react-native-svg"
const MenuIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={24}
    fill="none"
    {...props}
  >
    <Rect width={27.692} height={4.615} x={0.308} fill="#fff" rx={2.308} />
    <Rect
      width={27.692}
      height={4.615}
      x={0.308}
      y={10.154}
      fill="#fff"
      rx={2.308}
    />
    <Rect
      width={27.692}
      height={4.615}
      x={0.308}
      y={19.385}
      fill="#fff"
      rx={2.308}
    />
  </Svg>
)
export default MenuIcon
