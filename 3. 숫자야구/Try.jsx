import React, { PureComponent, memo } from 'react'

// class Try extends PureComponent {
//   render() {
//     const { tryInfo } = this.props
//     return (
//       <li>
//         <div>{tryInfo.try}</div>
//         <div>{tryInfo.result}</div>
//       </li>
//     )
//   }
// }

const Try = ({ tryInfo }) => {
  console.log('렌더링?')
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  )
}

export default memo(Try)
