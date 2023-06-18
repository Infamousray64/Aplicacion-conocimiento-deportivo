import { useState } from 'react'

export const ClickCounter = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => setCount((c) => c + 1)}
      >
        Count {count}
      </button>
    </div>
  )
}
