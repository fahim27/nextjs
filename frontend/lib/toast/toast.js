import toast from 'react-hot-toast';

export const notifySuccess = (message) => {
    toast.success(message);
};

export const notifyError = (message = null) => {
    if (!$message) {
        message = "Something went wrong!";
    }
    toast.error(message);
};

export const notifyInfo = (message) => {
    toast(message);
};
