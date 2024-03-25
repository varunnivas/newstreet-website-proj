import React, { useState, useEffect } from 'react';
import Sidenav from '../../../components/Sidenav';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useSelector } from 'react-redux';
import ReusableFormComponent from '../../../components/ReusableFormComponent';
import '../../../components/form.css'
import { sendFormData, updateNews } from '../redux/actions';
const AdminNews = () => {
  const [showForm, setShowForm] = useState(false);
  const [news, setNews] = useState([]);
  const [editData, setEditData] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
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
      await axios.delete(`https://nst-website-api.onrender.com/api/v1/news/${newsId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      fetchNews(); // Reload news data after deletion
      setSuccessMessage('News deleted successfully');
      setTimeout(() => {
        setSuccessMessage('');
      }, 2000); // Hide the success message after 2 seconds
    } catch (error) {
      console.error('Error deleting news:', error);
    }
  };
  const handleUpdate = () => {
    fetchNews(); // Reload products after successful update
    setEditData(null); // Reset selectedProduct after successful update
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h3>News</h3>
          <button onClick={toggleForm}>Add News</button>
          {showForm && <ReusableFormComponent initialValues={editData} onUpdate={handleUpdate} onDeleteSuccess={fetchNews} sendFormData={sendFormData} update={updateNews} />}
          <h2>Existing News</h2>
          <div className="table-container">
            {successMessage && (
              <div className="success-message">
                {successMessage}
              </div>
            )}
          </div>
          <table className="news-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {news.map((newsItem) => (
                <tr key={newsItem._id}>
                  <td>{newsItem.title}</td>
                  <td className="news-actions">
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

export default AdminNews;
