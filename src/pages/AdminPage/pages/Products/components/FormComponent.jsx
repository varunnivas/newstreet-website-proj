// FormComponent.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sendFormData, updateProduct } from '../redux/actions';

const FormComponent = ({ product, onUpdate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjAyOGI5NzM2ZWZkZGQ5NTZkNzVjNyIsInVzZXJuYW1lIjoibnN0X2FkbWluIiwiaWF0IjoxNzEwMjU4OTY4LCJleHAiOjE3MTAzNDUzNjh9.JNMFgbIP3oRsYdT4u5k3w7Pc_iqeDldLOyOFxpp3VBI"; 

  // Set initial state based on the product prop
  useEffect(() => {
    if (product) {
      setTitle(product.title || '');
      setDescription(product.description || '');
    }
  }, [product]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('file', file);

    // Check if product exists to determine if it's an update or creation
    if (product) {
      // Update product
      await dispatch(updateProduct(product._id, formData, token)); // Pass product ID
    } else {
      // Create new product
      await dispatch(sendFormData(formData, token));
    }

    onUpdate(); // Call onUpdate after successful submission
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
    <div style={{ marginBottom: '1rem' }}>
      <br/>
      <label style={{ marginBottom: '0.5rem' }}>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} style={{ width: '100%', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc' }} />
    </div>
    <div style={{ marginBottom: '1rem' }}>
      <label style={{ marginBottom: '0.5rem' }}>Description:</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} style={{ width: '100%', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc' }}
      />
    </div>
    <div style={{ marginBottom: '1rem' }}>
      <label style={{ marginBottom: '0.5rem' }}>File:</label>
      <input 
        type="file" 
        onChange={(e) => setFile(e.target.files[0])} 
        style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }} 
      />
    </div>
    <br/>
      <button type="submit" style={{ width: '20%', padding: '0.5rem', borderRadius: '0.25rem', border: 'none', backgroundColor: 'red', color: '#fff', cursor: 'pointer' }}>Submit</button>
  </form>
  );
};

export default FormComponent;
