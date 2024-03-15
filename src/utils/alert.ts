import { toast } from 'react-toastify'

export const showAlert = (message: string) => toast(message, { autoClose: 1000 })
