import React, { useState } from 'react'

export function AppWithHooks({ greeting }) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>
        {greeting}You clicked {count} times
      </p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
