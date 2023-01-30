import axios from 'axios';

export const fakeStoreApi = axios.create({
  baseURL: process.env.FAKE_STORE_API_URL,
});
