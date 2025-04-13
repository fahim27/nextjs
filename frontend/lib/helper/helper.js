export function requestExceptionHandler(exception) {
  const { response: resp } = exception;
  if (resp?.status == 422) {
    resp?.data?.message?.forEach((error) => {
      console.log(error);
      //   toaster(error, "error");
    });
  } else {
    // toaster("Something went to wrong", "error");
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
