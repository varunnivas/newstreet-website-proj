import React, { useState, useEffect } from 'react';
import Sidenav from '../../../components/Sidenav';
import Box from '@mui/material/Box';
import FormComponent from './FormComponent';
import axios from 'axios';

const News = () => {
  const [showForm, setShowForm] = useState(false);
  const [news, setNews] = useState([]);
  const [editData, setEditData] = useState(null);

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
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjAyOGI5NzM2ZWZkZGQ5NTZkNzVjNyIsInVzZXJuYW1lIjoibnN0X2FkbWluIiwiaWF0IjoxNzEwMjQzMDk5LCJleHAiOjE3MTAzMjk0OTl9.LqI9kLTYhfSjHtlZsW8fgoqd8VPYyneFlxj-OME5ncg"; // Replace with your authentication token
      await axios.delete(`https://nst-website-api.onrender.com/api/v1/news/${newsId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      fetchNews(); // Reload news data after deletion
    } catch (error) {
      console.error('Error deleting news:', error);
    }
  };

  const handleUpdate = async () => {
    // Handle update logic here
    fetchNews(); // Reload news data after updating
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
                    <button onClick={() => handleEdit(newsItem)}>Edit</button>
                    <button onClick={() => handleDelete(newsItem._id)}>Delete</button>
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
