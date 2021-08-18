import {showMessage} from 'react-native-flash-message';
import {Colors} from '../../utils';

const showError = (message) => {
  showMessage({
    message: message,
    type: 'default',
    backgroundColor: Colors.error,
    color: Colors.text.white,
    duration: 3000,
    icon: 'warning',
  });
};

const showSuccess = (message) =>{
    showMessage({
        message: message,
        type: 'success',
        backgroundColor: Colors.error,
        color: Colors.text.white,
        duration: 3000,
        icon: 'warning',
    });
};

export {showError, showSuccess};
