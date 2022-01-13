import React, { PureComponent } from 'react'

class Test extends PureComponent {
  state = {
    counter: 0,
    string: 'hello',
    number: 1,
    boolean: true,
    object: {},
    array: [],
  }

  // shouldComponentUpdate(nextProps, nextState, nextContent) {
  //   if (this.state.counter !== nextState.counter) {
  //     // 현재 카운터와 미래 카운터가 다를 경우
  //     return true
  //   }
  //   return false
  // }

  onClick = () => {
    this.setState({
      array: [...this.state.array, 1], // 새로운 배열을 만들어 줘야 알아차려준다.
    })
    this.setState({
      object: { ...this.state.object }, // 기존 객체에 추가하지 말고 새로운 객체를 만들어줘야한다.
    })
  }

  render() {
    console.log('랜더링')
    return (
      <div>
        <button onClick={this.onClick}>클릭</button>
      </div>
    )
  }
}

export default Test
