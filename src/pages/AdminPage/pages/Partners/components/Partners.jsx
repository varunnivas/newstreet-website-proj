import React, { useState, useEffect } from 'react';
import Sidenav from '../../../components/Sidenav';
import Box from '@mui/material/Box';
import FormComponent from './FormComponent';
import axios from 'axios';

const Partners = () => {
  const [showForm, setShowForm] = useState(false);
  const [partners, setPartners] = useState([]);
  const [selectedPartner, setSelectedPartner] = useState(null); 

  useEffect(() => {
    fetchPartners();
  }, []);

  const fetchPartners = async () => {
    try {
      const response = await axios.get('https://nst-website-api.onrender.com/api/v1/partners');
      setPartners(response.data);
    } catch (error) {
      console.error('Error fetching partners:', error);
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
    setSelectedPartner(null);
  };

  const handleEdit = (partner) => {
    setSelectedPartner(partner);
    setShowForm(true);
  };

  const handleDelete = async (partnerId) => {
    try {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjAyOGI5NzM2ZWZkZGQ5NTZkNzVjNyIsInVzZXJuYW1lIjoibnN0X2FkbWluIiwiaWF0IjoxNzEwMzI4OTcwLCJleHAiOjE3MTA0MTUzNzB9.FQH9KlaJh3e15d9qiWMenCATRaI70HWYbVebJtzqKUg";{
    }
      await axios.delete(`https://nst-website-api.onrender.com/api/v1/partners/${partnerId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      fetchPartners(); // Refresh partners after deletion
    } catch (error) {
      console.error('Error deleting partner:', error);
    }
  };

  const handleUpdate = () => {
    fetchPartners(); // Reload partners after successful update
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h3>Partners</h3>
          <button onClick={toggleForm}>Add New Partner</button>
          {showForm && <FormComponent partner={selectedPartner} onUpdate={handleUpdate} />}
          <h2>Existing Partners</h2>
          <table style={{ border: '1px solid white', borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid white', padding: '8px', textAlign: 'center' }}>Name</th>
                <th style={{ border: '1px solid white', padding: '8px', textAlign: 'center' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {partners.map(partner => (
                <tr key={partner._id}>
                  <td style={{ border: '1px solid white', padding: '8px', textAlign: 'center' }}>{partner.name}</td>
                  <td style={{ border: '1px solid white', padding: '8px', textAlign: 'center' }}>
                    <button onClick={() => handleEdit(partner)}>Edit</button>
                    <button onClick={() => handleDelete(partner._id)}>Delete</button> 
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

export default Partners;
