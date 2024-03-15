import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sendFormData, updateProduct } from '../redux/actions';
import { useSelector } from 'react-redux';

const FormComponent = ({ product, onUpdate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(true); // State variable to manage form visibility
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const token = user ? user.token : null;

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

    try {
      // Check if product exists to determine if it's an update or creation
      if (product) {
        // Update product
        await dispatch(updateProduct(product._id, formData, token)); // Pass product ID
      } else {
        // Create new product
        await dispatch(sendFormData(formData, token));
      }

      // Reset form fields and display success message
      setTitle('');
      setDescription('');
      setFile(null);
      setSuccessMessage('Form submitted successfully');
      setErrorMessage('');
      setIsFormOpen(false); // Close the form after submission

      // Auto-hide success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 2000);
    } catch (error) {
      // Display error message if submission fails
      setSuccessMessage('');
      setErrorMessage('Error submitting form');
    }

    onUpdate(); // Call onUpdate after successful submission
  };

  return (
    <>
      {isFormOpen && (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ marginBottom: '0.5rem' }}>Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} style={{ width: '100%', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc' }} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ marginBottom: '0.5rem' }}>Description:</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} style={{ width: '100%', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc' }} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ marginBottom: '0.5rem' }}>File:</label>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }} />
          </div>
          <button type="submit" style={{ width: '20%', padding: '0.5rem', borderRadius: '0.25rem', border: 'none', backgroundColor: 'red', color: '#fff', cursor: 'pointer' }}>Submit</button>
        </form>
      )}

      {/* Success and Error Messages Banner */}
      {(successMessage || errorMessage) && (
        <div style={{ position: 'fixed', top: 10, right: 10, backgroundColor: errorMessage ? 'red' : 'green', color: '#fff', padding: '10px', borderRadius: '5px', zIndex: 999 }}>
          {errorMessage || successMessage}
        </div>
      )}
    </>
  );
};

export default FormComponent;
