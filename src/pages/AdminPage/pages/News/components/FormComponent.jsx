import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sendFormData, updateNews } from '../redux/actions';

const FormComponent = ({ initialData, onUpdate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjAyOGI5NzM2ZWZkZGQ5NTZkNzVjNyIsInVzZXJuYW1lIjoibnN0X2FkbWluIiwiaWF0IjoxNzEwMjU4OTY4LCJleHAiOjE3MTAzNDUzNjh9.JNMFgbIP3oRsYdT4u5k3w7Pc_iqeDldLOyOFxpp3VBI"; 
  
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

    if (initialData) {
      // If initialData is provided, it means we're editing existing news
      await dispatch(updateNews(initialData._id, formData, token)); // Pass newsId for update
    } else {
      // Otherwise, it's a new news item
      await dispatch(sendFormData(formData, token));
    }

    onUpdate(); // Call onUpdate after successful submission
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: '1rem' }}>
        <br/>
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
      <br/>
      <button type="submit" style={{ width: '20%', padding: '0.5rem', borderRadius: '0.25rem', border: 'none', backgroundColor: 'red', color: '#fff', cursor: 'pointer' }}>Submit</button>
    </form>
  );
};

export default FormComponent;
