import axios from 'axios';
export const api = axios.create({
 baseURL: 'https://mock-api-ig2.glitch.me/',
 headers: {
  authorization: process.env.REACT_APP_FIREBASE_auth
 }
});
