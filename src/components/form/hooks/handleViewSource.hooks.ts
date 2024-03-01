import { ChangeEvent, useState } from 'react'

export const useHandleViewSource = () => {
  const [viewSourceLink, setViewSourceLink] = useState<string>()

  const handleViewSource = (e: ChangeEvent<HTMLInputElement>) => {
    setViewSourceLink('')
    const link = new URL(e.target.value)

    if (!link) return
    setViewSourceLink(`view-source:${link}`)
  }

  const clearViewSource = () => setViewSourceLink('')

  return { viewSourceLink, handleViewSource, setViewSourceLink, clearViewSource }
}
