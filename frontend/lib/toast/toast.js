import toast from 'react-hot-toast';

export const notifySuccess = (message) => {
    toast.success(message);
};

export const notifyError = (message = null) => {
    
    toast.success("Something went wrong!");
};

export const notifyInfo = (message) => {
    toast(message);
};
