import axios from 'axios';

export const axiosBlog = axios.create({
  baseURL: 'https://ddanshin-af25f.firebaseio.com/'
});