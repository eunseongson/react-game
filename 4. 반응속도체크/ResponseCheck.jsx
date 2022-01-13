import React, { PureComponent, useRef, useState } from 'react'

const ResponseCheck = () => {
  const [state, setState] = useState('waiting')
  const [message, setMessage] = useState('클릭해서 시작하세요')
  const [result, setResult] = useState([])
  const [avgResult, setAvgResult] = useState([])
  const timeout = useRef(null)
  const startTime = useRef()
  const endTime = useRef()

  const onClickScreen = () => {
    if (state === 'waiting') {
      setState('ready')
      setMessage('초록색이 되면 클릭하세요.')
      timeout.current = setTimeout(() => {
        setState('now')
        setMessage('지금 클릭')
        startTime.current = new Date()
      }, Math.floor(Math.random() * 1000) + 2000) // 2~3초 랜덤
    } else if (state === 'ready') {
      // 성급하게 클릭
      clearTimeout(timeout.current) // 이게 없으면 setTimeout이 실행되어 빨간색일 때 클릭해도 초록색이 나온다. 그래서 빨간색일 때 클릭하면 setTimeout을 초기화 시켜주어야 한다.
      setState('waiting')
      setMessage('너무 성급하시군요! 초록색이 된 후에 클릭하세요.')
    } else if (state === 'now') {
      // 반응속도 체크
      endTime.current = new Date()
      setState('waiting')
      setMessage('클릭해서 시작하세요.')
      setResult([endTime.current - startTime.current])
      setAvgResult(prevResult => {
        return [...prevResult, endTime.current - startTime.current]
      })
    }
  }

  const onReset = () => {
    setResult([])
    setAvgResult([])
  }
  const renderAverage = () => {
    return result.length === 0 || avgResult.length === 0 ? null : (
      <>
        <div>현재 반응속도 : {result.reduce((a, c) => a + c) / result.length}ms</div>
        <div>평균 반응속도 : {avgResult.reduce((a, c) => a + c) / avgResult.length}ms</div>
        <button onClick={onReset}>리셋</button>
      </>
    )
  }
  return (
    <>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      {renderAverage()}
    </>
  )
}
export default ResponseCheck
