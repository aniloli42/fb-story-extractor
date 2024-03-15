import { useState } from 'react'
import { Output } from './types/output.type'
import Form from './components/form'
import Result from './components/result'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [result, setResult] = useState<Output>([])

  return (
    <div className="p-4">
      <ToastContainer hideProgressBar closeButton={false} stacked />
      <h1 className="text-2xl mb-4">Facebook Story Extractor</h1>
      <Form setResult={setResult} />
      <Result result={result} />
    </div>
  )
}

export default App
