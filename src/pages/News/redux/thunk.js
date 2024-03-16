import { fetchNewsStart, fetchNewsSuccess, fetchNewsFailure } from './slice';
import axios from 'axios';

export const fetchNews = () => async (dispatch) => {
  dispatch(fetchNewsStart());
  try {
    const response = await axios.get('https://nst-website-api.onrender.com/api/v1/news/');
    dispatch(fetchNewsSuccess(response.data));
  } catch (error) {
    dispatch(fetchNewsFailure(error.message));
  }
};
