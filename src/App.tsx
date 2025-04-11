import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(newCount(count))}>
        count is {count}
      </button>
      <div>Hello!!</div>
    </div>
  )
}

function newCount(a: number) {
  return a + 2.2;
}
export default App
