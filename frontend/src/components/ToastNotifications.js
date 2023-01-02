import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showSuccessToastMessage = (msg) => {
    toast.success(msg, {
          position: toast.POSITION.TOP_RIGHT
      });
};

export const showErrorToastMessage = (msg) => {
    toast.error(msg, {
          position: toast.POSITION.TOP_RIGHT
      });
};