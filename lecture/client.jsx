import React from 'react'
import ReactDom from 'react-dom' // 노드에 설치된 것을 불러오는 것
import Lotto from './lotto'

ReactDom.render(<Lotto />, document.querySelector('#root'))
