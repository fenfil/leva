import { AxiosError } from 'axios';
import { toastr } from 'react-redux-toastr';

export const handleError = (errorTitle: string, error: AxiosError) => {
  console.error(errorTitle, error.response);

  if (error.response) {
    console.log('response error');
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    // console.log(error.response.data);
    // console.log(error.response.status);
    // console.log(error.response.headers);
    const { data } = error.response;
    let err = data.error;
    if (data.field) err = `${data.field}: ${data.error}`;
    else if (Array.isArray(data.message)) err = data.message.join('\n');
    else if (data.message) err = data.message;
    else if (data.error) err = data.error;
    else err = (error as AxiosError).response.statusText;
    console.log(err);

    toastr.error(errorTitle, err);
  } else if (error.request) {
    console.log('request error');
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    toastr.error(errorTitle, 'Неизвестная ошибка');
  } else if (Array.isArray(error)) {
    toastr.error(errorTitle, error.join('\n'));
  } else if (typeof error === 'string') {
    toastr.error(errorTitle, error);
  } else {
    console.log('default error');
    // Something happened in setting up the request that triggered an Error
    toastr.error(errorTitle, 'Неизвестная ошибка');
  }
  console.error(error);
};
