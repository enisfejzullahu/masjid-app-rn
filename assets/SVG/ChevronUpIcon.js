import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ChevronUpIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="m.755 11 9.93 9.9L.754 11Zm19.15.706a1.993 1.993 0 0 0 0-2.824L12.1 1.1a2.007 2.007 0 0 0-2.832 0l1.416 1.412L19.197 11l.708.706ZM12.1 1.101a2.007 2.007 0 0 0-2.832 0L1.464 8.88a1.993 1.993 0 0 0 0 2.825L2.172 11l8.512-8.487L12.1 1.1ZM10.684 20.9l9.929-9.9-9.929 9.9Z"
    />
  </Svg>
)
export default ChevronUpIcon
