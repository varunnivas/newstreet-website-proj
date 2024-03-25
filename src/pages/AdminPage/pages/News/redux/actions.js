import axios from 'axios';

export const sendFormData = (formData, token) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('https://nst-website-api.onrender.com/api/v1/news/create', formData, {
        headers: {
          'Authorization': `Bearer ${token}`, 
          'Content-Type': 'multipart/form-data' 
        }
      });

      dispatch(formDataSent(response.data));
    } catch (error) {
      dispatch(formDataFailed(error.message));
    }
  };
};

export const updateNews = (newsId, formData, token) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`https://nst-website-api.onrender.com/api/v1/news/${newsId}`, formData, {
        headers: {
          'Authorization': `Bearer ${token}`, 
          'Content-Type': 'multipart/form-data' 
        }
      });

      dispatch(formDataSent(response.data));
    } catch (error) {
      dispatch(formDataFailed(error.message));
    }
  };
};

const formDataSent = (data) => ({
  type: 'FORM_DATA_SENT',
  payload: data
});

const formDataFailed = (error) => ({
  type: 'FORM_DATA_FAILED',
  payload: error
});
