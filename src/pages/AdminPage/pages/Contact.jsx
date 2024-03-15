import React, { useState, useEffect } from 'react'; // Import useState and useEffect hooks
import Sidenav from '../components/Sidenav';
import Box from '@mui/material/Box';
import axios from 'axios';

const Contact = () => {
  const [queries, setQueries] = useState([]); // Initialize state for queries

  useEffect(() => {
    fetchQueries();
  }, []);

  const fetchQueries = async () => {
    try {
      const response = await axios.get('https://nst-website-api.onrender.com/api/v1/contact');
      setQueries(response.data);
    } catch (error) {
      console.error('Error fetching queries:', error);
    }
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h3>Contact Queries</h3>
          <table style={{ border: '1px solid white', borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid white', padding: '8px', textAlign: 'center' }}>Name</th>
                <th style={{ border: '1px solid white', padding: '8px', textAlign: 'center' }}>Company Name</th>
                <th style={{ border: '1px solid white', padding: '8px', textAlign: 'center' }}>Email</th>
                <th style={{ border: '1px solid white', padding: '8px', textAlign: 'center' }}>Message</th>
              </tr>
            </thead>
            <tbody>
              {queries.map(query => (
                <tr key={query._id}>
                  <td style={{ border: '1px solid white', padding: '8px', textAlign: 'center' }}>{query.name}</td>
                  <td style={{ border: '1px solid white', padding: '8px', textAlign: 'center' }}>{query.companyName}</td>
                  <td style={{ border: '1px solid white', padding: '8px', textAlign: 'center' }}>{query.email}</td>
                  <td style={{ border: '1px solid white', padding: '8px', textAlign: 'center' }}>{query.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
