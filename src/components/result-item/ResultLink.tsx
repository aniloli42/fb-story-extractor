type Props = { url: string; text: string }
const ResultLink = ({ url, text }: Props) => {
  return (
    <a className="px-2 py-1 bg-gray-600 hover:bg-gray-700 text-white rounded" href={url} target="_blank">
      {text}
    </a>
  )
}
export default ResultLink
