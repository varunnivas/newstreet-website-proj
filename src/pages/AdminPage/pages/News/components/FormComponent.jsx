import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sendFormData, updateNews } from '../redux/actions';
import { useSelector } from 'react-redux';

const NewsFormComponent = ({ initialData, onUpdate, onDeleteSuccess }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const token = user ? user.token : null;
  const toggleForm = () => {
    setShowForm(!showForm);
    setEditData(null); // Reset edit data when toggling form
  };

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || '');
      setDescription(initialData.description || '');
    }
  }, [initialData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('file', file);

    try {
      if (initialData) {
        await dispatch(updateNews(initialData._id, formData, token)); // Pass newsId for update
        setSuccessMessage('News updated successfully');
      } else {
        await dispatch(sendFormData(formData, token));
        setSuccessMessage('News added successfully');
      }
      onUpdate(); // Call onUpdate after successful submission

      // Set timeout to clear the success message after 2 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 2000);
    } catch (error) {
      setErrorMessage('Error submitting news');

      // Set timeout to clear the error message after 2 seconds
      setTimeout(() => {
        setErrorMessage('');
      }, 2000);
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} style={{ width: '100%', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} style={{ width: '100%', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>File:</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} style={{ width: '20%', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc' }} />
        </div>
        <button onClick={toggleForm} type="submit" style={{ width: '20%', padding: '0.5rem', borderRadius: '0.25rem', border: 'none', backgroundColor: 'red', color: '#fff', cursor: 'pointer' }}>Submit</button>
      </form>
      
      {/* Success and Error Messages Banner */}
      {(successMessage || errorMessage) && (
        <div style={{ position: 'fixed', top: 10, right: 10, backgroundColor: errorMessage ? 'red' : 'green', color: '#fff', padding: '10px', borderRadius: '5px' }}>
          {errorMessage || successMessage}
        </div>
      )}
    </div>
  );
};

export default NewsFormComponent;
