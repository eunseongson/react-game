import React, { PureComponent } from 'react'

class ResponseCheck extends PureComponent {
  state = {
    state: 'waiting',
    message: '클릭해서 시작하세요',
    result: [],
    avgResult: [],
  }

  timeout
  startTime
  endTime

  onClickScreen = () => {
    const { state, message, result, avgResult } = this.state
    if (state === 'waiting') {
      this.setState({
        state: 'ready',
        message: '초록색이 되면 클릭하세요.',
      })
      this.timeout = setTimeout(() => {
        this.setState({
          state: 'now',
          message: '지금 클릭',
        })
        this.startTime = new Date()
      }, Math.floor(Math.random() * 1000) + 2000) // 2~3초 랜덤
    } else if (state === 'ready') {
      // 성급하게 클릭
      clearTimeout(this.timeout) // 이게 없으면 setTimeout이 실행되어 빨간색일 때 클릭해도 초록색이 나온다. 그래서 빨간색일 때 클릭하면 setTimeout을 초기화 시켜주어야 한다.
      this.setState({
        state: 'waiting',
        message: '너무 성급하시군요! 초록색이 된 후에 클릭하세요.',
      })
    } else if (state === 'now') {
      // 반응속도 체크
      this.endTime = new Date()
      this.setState(prevState => {
        console.log(prevState)
        return {
          state: 'waiting',
          message: '클릭해서 시작하세요.',
          result: [this.endTime - this.startTime], // 즉시 반응속도
          avgResult: [...prevState.avgResult, this.endTime - this.startTime], // 평균 반응속도
        }
      })
    }
  }

  onReset = () => {
    this.setState({
      result: [],
      avgResult: [],
    })
  }
  renderAverage = () => {
    const { result, avgResult } = this.state
    return result.length === 0 || avgResult.length === 0 ? null : (
      <>
        <div>현재 반응속도 : {result.reduce((a, c) => a + c) / result.length}ms</div>
        <div>평균 반응속도 : {avgResult.reduce((a, c) => a + c) / avgResult.length}ms</div>
        <button onClick={this.onReset}>리셋</button>
      </>
    )
  }
  render() {
    const { state, message } = this.state
    return (
      <>
        <div id="screen" className={state} onClick={this.onClickScreen}>
          {message}
        </div>
        {this.renderAverage()}
      </>
    )
  }
}

export default ResponseCheck
