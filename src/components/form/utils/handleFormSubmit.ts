import { Dispatch, FormEvent, SetStateAction } from 'react'
import { extractFbViewSource } from '../../../utils/extractFbViewSource'
import { Output } from '../../../types/output.type'
import { showAlert } from '../../../utils/alert'
import { z } from 'zod'

const ContentSchema = z.object({
  link: z.string().url(),
  dom: z.string().min(50)
})

export const handleSubmit = (
  e: FormEvent<HTMLFormElement>,
  setResult: Dispatch<SetStateAction<Output>>,
  clearViewSource: () => void
) => {
  e.preventDefault()
  setResult([])

  const formData = new FormData(e.currentTarget)
  const link = formData.get('link')
  const dom = formData.get('dom')

  const parsedFormData = ContentSchema.safeParse({ link, dom })
  if (parsedFormData.success === false) return showAlert('Check your inputs')

  const {
    data: { dom: parsedDom }
  } = parsedFormData

  const extractedResults = extractFbViewSource(parsedDom)
  if (extractedResults == null || typeof extractedResults === 'string' || typeof extractedResults === 'number') {
    showAlert('Story not found!!!')
    return setResult([])
  }

  setResult(extractedResults)
  e.currentTarget.reset()
  clearViewSource()
}
