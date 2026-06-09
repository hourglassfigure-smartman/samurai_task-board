import { useState } from 'react'

function TaskInput({ onAdd }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setText('')
  }

  return (
    <form className="task-input" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input__field"
        placeholder="タスクを入力..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="task-input__button">追加</button>
    </form>
  )
}

export default TaskInput
