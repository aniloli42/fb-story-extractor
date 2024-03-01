import { Output } from '../../types/output.type'
import FormItemWrapper from './components/FormItemWrapper'
import { useHandleViewSource } from './hooks/handleViewSource.hooks'
import { handleSubmit } from './utils/handleFormSubmit'
import { handleLinkClick } from './utils/handleLinkClick'

type FormProps = { setResult: React.Dispatch<React.SetStateAction<Output>> }

const Form = ({ setResult }: FormProps) => {
  const { viewSourceLink, handleViewSource, clearViewSource } = useHandleViewSource()

  return (
    <form onSubmit={(e) => handleSubmit(e, setResult, clearViewSource)} className="flex flex-col gap-2">
      <FormItemWrapper>
        <label>Story Link</label>
        <input
          type="text"
          name="link"
          onChange={handleViewSource}
          className="border border-gray-800 p-2 rounded"
          placeholder="paste story link here"
        />
      </FormItemWrapper>

      <FormItemWrapper>
        <label>View Source Link</label>
        <p
          className="border border-gray-800 p-2 rounded select-all"
          onClick={() => handleLinkClick(viewSourceLink ?? '')}
        >
          <span className="select-all peer break-words">{viewSourceLink}</span>
          <span className="peer-empty:visible invisible pointer-events-none  select-none text-gray-400">
            view source link will be auto generated here
          </span>
        </p>
      </FormItemWrapper>

      <FormItemWrapper>
        <label>Paste View Source Content Below:</label>
        <textarea name="dom" className="border border-gray-400 rounded p-2" rows={6} />
      </FormItemWrapper>

      <button type="submit" className="bg-gray-800 mt-2 text-white py-1 rounded">
        Get Stories
      </button>
    </form>
  )
}
export default Form
