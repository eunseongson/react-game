const React = require('react')
const { useState, useRef } = React

const WordRelay = () => {
  const [word, setWord] = useState('손은성')
  const [value, setValue] = useState('')
  const [result, setResult] = useState('')
  const inputRef = useRef('null')

  const onSubmitForm = e => {
    e.preventDefault()
    if (word[word.length - 1] === value[0]) {
      setResult('성공')
      setWord(value)
      setValue('')
      inputRef.current.focus()
    } else {
      setResult('실패')
      setValue('')
      inputRef.current.focus()
    }
  }

  const onChangeInput = e => {
    setValue(e.target.value)
  }
  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <label id="wordInpupt" htmlFor="wordInput">
          글자를 입력하세요.
        </label>
        <input id="wordInpupt" className="wordInput" ref={inputRef} value={value} onChange={onChangeInput} />
        <button>입력</button>
      </form>
      <div>{result}</div>
    </>
  )
}

module.exports = WordRelay
