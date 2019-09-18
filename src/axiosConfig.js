import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_ENDPOINT}`,
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFTOKEN'
});

export default instance;