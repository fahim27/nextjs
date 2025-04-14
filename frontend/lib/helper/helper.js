import { notifyError } from "../toast/toast";

export function requestExceptionHandler(exception) {
  const { response: resp } = exception;
  if (resp?.status == 422) {
    resp?.data?.data?.errors?.forEach((error) => {
      notifyError(error);
    });
  } else {
    notifyError();
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
