import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import GameMatcher from './GameMatcher'

const Games = () => {
  return (
    <BrowserRouter>
      공통인부분
      <div>
        <Link to="/game/number-baseball?query=10&hello=son&bye=react">숫자야구</Link>
        &nbsp;
        <Link to="/game/rock-scissors-paper">가위바위보</Link>
        &nbsp;
        <Link to="/game/lotto-generator">로또 생성기</Link>
        &nbsp;
        <Link to="/game/index">게임메쳐</Link>
      </div>
      <div>
        <Route path="/game/:name" component={GameMatcher} />
      </div>
    </BrowserRouter>
  )
}

export default Games
