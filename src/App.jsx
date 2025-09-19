import { useState } from 'react'
import './reset.css'
import './App.css'

function App() {
  // const dbTodos = '서버(백엔드)에서 할일 목록을 받아오는 함수'
  const dbTodos = ['자바스크립트 공부하기', '파스타 먹기', '잠자기'];

  const [todos, setTodos] = useState(dbTodos);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    setTodos([inputValue, ...todos]);
    // inputValue를 빈 문자열로 업데이트
    setInputValue('');
  }

  const deleteTodo = (id) => {
    // const newTodos = todos.filter((_, i) => { return 현재인덱스 !== i });
    const newTodos = todos.filter((_, i) => id !== i);
    setTodos(newTodos);
  }

  return (
    <>
      <header className='header'>
        <h1>TODO LIST</h1>
      </header>

      <div className='input-wrap'>
        <input
          className='user-input'
          placeholder='할 일을 입력해주세요'
          value={inputValue}
          // target vs currentTarget
          onChange={(e) => {setInputValue(e.target.value)}}
          onKeyDown={(e) => {e.key === 'Enter' && addTodo()}}
        />
        <button
          className='add-button'
          onClick={addTodo}
        >추가</button>
      </div>

      <div className='todo-list-wrap'>
        <h2 className='list-title'>할 일</h2>
        <ul className='todo-list'>
          {todos.map((todo, i) => {
            return(
              <li key={i} className='todo-item'>
                <input type='checkbox' />
                <p>{todo}</p>
                <button
                  className='delete-button'
                  onClick={() => deleteTodo(i)}
                >x</button>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default App
