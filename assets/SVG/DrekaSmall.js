import * as React from "react"
import Svg, { Path } from "react-native-svg"
const DrekaSmall = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#06A85D"
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="M1.68 11.992h-1M3.78 5.536l-.817-.585M9.26 1.555l-.316-.97M16.024 1.555l.3-.97M21.49 5.536l.816-.585M23.588 11.992h1M21.49 18.464l.816.585M16.024 22.445l.3.97M9.26 22.445l-.316.97M3.78 18.464l-.817.585"
    />
    <Path
      fill="#06A85D"
      d="M12.642 19.183c3.957 0 7.164-3.22 7.164-7.191 0-3.972-3.207-7.192-7.164-7.192-3.956 0-7.163 3.22-7.163 7.192 0 3.971 3.207 7.191 7.163 7.191Z"
    />
  </Svg>
)
export default DrekaSmall
