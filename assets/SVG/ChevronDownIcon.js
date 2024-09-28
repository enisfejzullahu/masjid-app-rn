import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ChevronDownIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M20.613 10 10.684.1l9.929 9.9Zm-19.15-.706a1.993 1.993 0 0 0 0 2.824L9.269 19.9c.782.78 2.05.78 2.832 0l-1.416-1.412L2.172 10l-.708-.706Zm7.805 10.605c.782.78 2.05.78 2.832 0l7.805-7.78a1.993 1.993 0 0 0 0-2.825l-.709.706-8.512 8.487L9.268 19.9ZM10.684.102.755 10l9.93-9.9Z"
    />
  </Svg>
)
export default ChevronDownIcon
