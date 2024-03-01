import { useState } from 'react'
import { Output } from './types/output.type'
import Form from './components/form'
import Result from './components/result'

function App() {
  const [result, setResult] = useState<Output>([])

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Facebook Story Extractor</h1>
      <Form setResult={setResult} />
      <Result result={result} />
    </div>
  )
}

export default App
