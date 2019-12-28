import axios from 'axios';

const fakeRequest = (resData, delay) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(resData);
    }, delay);
  });
};
export default class API {
  api = axios.create({
    baseURL: '',
    responseType: 'json'
  });

  getTodos = async () => {
    return await fakeRequest([1, 2, 3, 4, 5], 2000);
  };
}
