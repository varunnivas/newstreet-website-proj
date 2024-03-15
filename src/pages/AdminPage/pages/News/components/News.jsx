import React, { useState, useEffect } from 'react';
import Sidenav from '../../../components/Sidenav';
import Box from '@mui/material/Box';
import FormComponent from './FormComponent';
import axios from 'axios';
import { useSelector } from 'react-redux';

const News = () => {
  const [showForm, setShowForm] = useState(false);
  const [news, setNews] = useState([]);
  const [editData, setEditData] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  // Fetch user and token from Redux store
  const user = useSelector(state => state.user.user);
  const token = user ? user.token : null;

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get('https://nst-website-api.onrender.com/api/v1/news');
      setNews(response.data);
    } catch (error) {
      console.error('Error fetching News:', error);
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
    setEditData(null); // Reset edit data when toggling form
  };

  const handleEdit = (newsItem) => {
    setShowForm(true);
    setEditData(newsItem);
  };

  const handleDelete = async (newsId) => {
    try {
      if (!token) {
        console.error('Token is not available');
        return;      
      }
      
      await axios.delete(`https://nst-website-api.onrender.com/api/v1/news/${newsId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      fetchNews(); // Reload news data after deletion
      setSuccessMessage('News deleted successfully'); // Set success message
      setTimeout(() => {
        setSuccessMessage('');
      }, 2000); // Hide the success message after 2 seconds
    } catch (error) {
      console.error('Error deleting news:', error);
      setErrorMessage('Error deleting news');
    }
  };

  const handleUpdate = async () => {
    // Handle update logic here
    fetchNews(); // Reload news data after updating
    setShowForm(false);
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h3>News</h3>
          <button onClick={toggleForm}>Add News</button>
          {showForm && <FormComponent initialData={editData} onUpdate={handleUpdate} />}
          <h2>Existing News</h2>
          <table style={{ border: '1px solid white', borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid white', padding: '8px', textAlign: 'center' }}>Title</th>
                <th style={{ border: '1px solid white', padding: '8px', textAlign: 'center' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {news.map((newsItem) => (
                <tr key={newsItem._id}>
                  <td style={{ border: '1px solid white', padding: '8px', textAlign: 'center' }}>{newsItem.title}</td>
                  <td style={{ border: '1px solid white', padding: '8px', textAlign: 'center' }}>
                    <button onClick={() => handleEdit(newsItem)} style={{ marginRight: '30px' }}>Edit</button>
                    <button onClick={() => handleDelete(newsItem._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Success and Error Messages Banner */}
          {(successMessage || errorMessage) && (
            <div style={{ position: 'fixed', top: 10, right: 10, backgroundColor: errorMessage ? 'red' : 'green', color: '#fff', padding: '10px', borderRadius: '5px', zIndex: 999 }}>
              {errorMessage || successMessage}
            </div>
          )}
        </Box>
      </Box>
    </>
  );
};

export default News;
