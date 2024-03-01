import { PropsWithChildren } from 'react'

const FormItemWrapper = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col gap-2">{children}</div>
}
export default FormItemWrapper
