import React, { useState, useEffect } from 'react';
import Sidenav from '../../../components/Sidenav';
import Box from '@mui/material/Box';
import Navbar from '../../../components/Navbar';
import FormComponent from './FormComponent';
import axios from 'axios';

const News = () => {
  const [showForm, setShowForm] = useState(false);
  const [News, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get('https://nst-website-api.onrender.com/api/v1/News');
      setNews(response.data);
    } catch (error) {
      console.error('Error fetching News:', error);
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleEdit = (productId) => {
    // Handle edit logic (e.g., navigate to edit page or open modal)
    console.log('Edit product:', productId);
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/news/create/${productId}`);
      fetchNews();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <>
      <Navbar />
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h3>News</h3>
          <button onClick={toggleForm}>Add News</button>
          {showForm && <FormComponent />}
          <h2>Existing News</h2>
          <table style={{ border: '1px solid white', borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid white', padding: '8px', textAlign: 'center' }}>Title</th>
                <th style={{ border: '1px solid white', padding: '8px', textAlign: 'center' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {News.map(product => (
                <tr key={product._id}>
                  <td style={{ border: '1px solid white', padding: '8px', textAlign: 'center' }}>{product.title}</td>
                  <td style={{ border: '1px solid white', padding: '8px', textAlign: 'center' }}>
                    <button onClick={() => handleEdit(product._id)}>Edit</button>
                    <button onClick={() => handleDelete(product._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
      </Box>
    </>
  );
};

export default News;
