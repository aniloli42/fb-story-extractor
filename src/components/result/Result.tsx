import { Output } from '../../types/output.type'
import ResultItem from '../result-item'

type Props = { result: Output }
const Result = ({ result }: Props) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-4">
      {result.map((story, storyIndex) => (
        <ResultItem story={story} storyIndex={storyIndex} key={story.storyId} />
      ))}
    </div>
  )
}
export default Result
