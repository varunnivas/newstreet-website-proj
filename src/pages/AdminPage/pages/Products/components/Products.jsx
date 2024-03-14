// Product.jsx
import React, { useState, useEffect } from 'react';
import Sidenav from '../../../components/Sidenav';
import Box from '@mui/material/Box';
import FormComponent from './FormComponent';
import axios from 'axios';

const Products = () => {
  const [showForm, setShowForm] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); 

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://nst-website-api.onrender.com/api/v1/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
    setSelectedProduct(null);
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setShowForm(true);
  };

  const handleDelete = async (productId) => {
    try {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjAyOGI5NzM2ZWZkZGQ5NTZkNzVjNyIsInVzZXJuYW1lIjoibnN0X2FkbWluIiwiaWF0IjoxNzEwMjQzMDk5LCJleHAiOjE3MTAzMjk0OTl9.LqI9kLTYhfSjHtlZsW8fgoqd8VPYyneFlxj-OME5ncg"; // Replace "YOUR_AUTHENTICATION_TOKEN" with the actual token
      await axios.delete(`https://nst-website-api.onrender.com/api/v1/products/${productId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      fetchProducts(); // Refresh products after deletion
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleUpdate = () => {
    fetchProducts(); // Reload products after successful update
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h3>Products</h3>
          <button onClick={toggleForm}>Add New Product</button>
          {showForm && <FormComponent product={selectedProduct} onUpdate={handleUpdate} />}
          <h2>Existing Products</h2>
          <table style={{ border: '1px solid white', borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid white', padding: '8px', textAlign: 'center' }}>Title</th>
                <th style={{ border: '1px solid white', padding: '8px', textAlign: 'center' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product._id}>
                  <td style={{ border: '1px solid white', padding: '8px', textAlign: 'center' }}>{product.title}</td>
                  <td style={{ border: '1px solid white', padding: '8px', textAlign: 'center' }}>
                    <button onClick={() => handleEdit(product)}>Edit</button>
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

export default Products;
