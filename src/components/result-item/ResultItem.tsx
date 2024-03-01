import { Photo, Video } from '../../types/output.type'
import ResultLink from './ResultLink'

type Props = { story: Photo | Video; storyIndex: number }
const ResultItem = ({ story, storyIndex }: Props) => {
  return (
    <div key={story.storyId} className="mt-4 border border-gray-800 p-4 rounded">
      <h2 className="text-lg my-2">Story {storyIndex + 1}</h2>
      <div className="space-x-2">
        {'hdUrl' in story ? (
          <>
            <ResultLink url={story.hdUrl} text="HD Video" />
            <ResultLink url={story.sdUrl} text="SD Video" />
          </>
        ) : (
          <ResultLink url={story.image} text="Photo" />
        )}
      </div>
    </div>
  )
}
export default ResultItem
