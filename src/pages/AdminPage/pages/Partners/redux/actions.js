// actions.jsx
import axios from 'axios';

export const sendPartnerData = (formData, token) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('https://nst-website-api.onrender.com/api/v1/partners/create', formData, {
        headers: {
          'Authorization': `Bearer ${token}`, 
          'Content-Type': 'multipart/form-data' 
        }
      });

      dispatch(partnerDataSent(response.data));
    } catch (error) {
      dispatch(partnerDataFailed(error.message));
    }
  };
};

export const updatePartner = (partnerId, formData, token) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`https://nst-website-api.onrender.com/api/v1/partners/${partnerId}`, formData, {
        headers: {
          'Authorization': `Bearer ${token}`, 
          'Content-Type': 'multipart/form-data' 
        }
      });

      dispatch(partnerDataSent(response.data));
    } catch (error) {
      dispatch(partnerDataFailed(error.message));
    }
  };
};

const partnerDataSent = (data) => ({
  type: 'PARTNER_DATA_SENT',
  payload: data
});

const partnerDataFailed = (error) => ({
  type: 'PARTNER_DATA_FAILED',
  payload: error
});
