import * as React from "react"
import Svg, { Path } from "react-native-svg"
const LightIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={26}
    fill="none"
    {...props}
  >
    <Path
      stroke="#06A85D"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M2.578 12.992h-.996M4.67 6.536l-.813-.585M10.136 2.556l-.315-.97M16.88 2.556l.3-.97M22.33 6.536l.813-.585M24.422 12.992h.997M22.33 19.464l.813.586M16.88 23.445l.3.97M10.136 23.445l-.315.97M4.67 19.464l-.813.586"
    />
    <Path
      fill="#06A85D"
      stroke="#06A85D"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M13.508 20.183c3.945 0 7.143-3.22 7.143-7.191 0-3.972-3.198-7.192-7.143-7.192s-7.143 3.22-7.143 7.192c0 3.971 3.198 7.191 7.143 7.191Z"
    />
  </Svg>
)
export default LightIcon
