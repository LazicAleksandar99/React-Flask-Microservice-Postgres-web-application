import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
import '../../node_modules/react-toastify/dist/ReactToastify.css'

export const showSuccessToastMessage = (msg) => {
    toast.success(msg, {
          position: toast.POSITION.BOTTOM_CENTER
      });
};

export const showErrorToastMessage = (msg) => {
    toast.error(msg, {
          position: toast.POSITION.BOTTOM_CENTER
      });
};