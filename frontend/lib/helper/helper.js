import { notifyError, notifySuccess } from "../toast/toast";
import { redirect } from 'next/navigation'
import Cookies from 'js-cookie';

export function requestExceptionHandler(exception) {
  const { response: resp } = exception;
  if (resp?.status == 422) {
    resp?.data?.data?.errors?.forEach((error) => {
      notifyError(error);
    });
  } else if (resp.status == 401) {
    console.log('=====================login required',Cookies.get('auth_token'));
    redirect(`/login`)
  }
  else {
    // notifySuccess('abc');
    console.error(exception.message);
  }
}

export function makeFormDataFromObject(obj, formData = null) {
  if (!formData) {
    formData = new FormData();
  }
  Object.entries(obj).forEach(([key, value]) => {
    formData.append(key, value);
  });
  return formData;
}
