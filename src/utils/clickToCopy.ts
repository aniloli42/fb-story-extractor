export const clickToCopyIntoClipboard = (text: string) => {
  navigator.clipboard.writeText(text)
}
