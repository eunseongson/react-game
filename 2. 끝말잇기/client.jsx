const React = require('react');
const ReactDom = require('react-dom') // 노드에 설치된 것을 불러오는 것
const WordRelay = require('./wordRelayClass')


ReactDom.render(<WordRelay/>, document.querySelector('#root'))