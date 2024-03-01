import { clickToCopyIntoClipboard } from '../../../utils/clickToCopy'

export const handleLinkClick = (text: string) => {
  if (!text) return

  clickToCopyIntoClipboard(text)
}
