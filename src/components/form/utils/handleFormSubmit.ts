import { Dispatch, FormEvent, SetStateAction } from 'react'
import { extractFbViewSource } from '../../../utils/extractFbViewSource'
import { Output } from '../../../types/output.type'

export const handleSubmit = (
  e: FormEvent<HTMLFormElement>,
  setResult: Dispatch<SetStateAction<Output>>,
  clearViewSource: () => void
) => {
  e.preventDefault()

  const formData = new FormData(e.currentTarget)
  const dom = formData.get('dom')
  if (!dom) return

  const extractedResults = extractFbViewSource(dom)
  if (extractedResults == null) return setResult([])

  setResult(extractedResults)
  e.currentTarget.reset()
  clearViewSource()
}
