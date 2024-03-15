import React, { useState, useEffect} from 'react';
import Sidenav from '../../../components/Sidenav';
import Box from '@mui/material/Box';
import FormComponent from './FormComponent';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Products = () => {
  const [showForm, setShowForm] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [deleteMessage, setDeleteMessage] = useState('');
  const user = useSelector(state => state.user.user);
  const token = user ? user.token : null;


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
      // Ensure token is defined before using it
      if (!token) {
        console.error('Token is not available');
        return;
      }
      
      // Use the token for authorization
      await axios.delete(`https://nst-website-api.onrender.com/api/v1/products/${productId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      // Refresh products after deletion
      fetchProducts();
  
      // Set delete message
      setDeleteMessage('Product deleted successfully');
  
      // Hide the delete message after 2 seconds
      setTimeout(() => {
        setDeleteMessage('');
      }, 2000);
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
                    <button onClick={() => handleEdit(product)} style={{ marginRight: '30px' }}>Edit</button>
                    <button onClick={() => handleDelete(product._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Delete Message Banner */}
          {deleteMessage && (
            <div style={{ position: 'fixed', top: 10, right: 10, backgroundColor: 'green', color: '#fff', padding: '10px', borderRadius: '5px', zIndex: 999 }}>
              {deleteMessage}
            </div>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Products;
