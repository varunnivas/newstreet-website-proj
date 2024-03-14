import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sendPartnerData, updatePartner } from '../redux/actions';

const FormComponent = ({ partner, onUpdate }) => {
  const [name, setName] = useState('');
  const [logo, setLogo] = useState(null);
  const dispatch = useDispatch();
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjAyOGI5NzM2ZWZkZGQ5NTZkNzVjNyIsInVzZXJuYW1lIjoibnN0X2FkbWluIiwiaWF0IjoxNzEwMzI4OTcwLCJleHAiOjE3MTA0MTUzNzB9.FQH9KlaJh3e15d9qiWMenCATRaI70HWYbVebJtzqKUg";

  // Set initial state based on the partner prop
  useEffect(() => {
    if (partner) {
      setName(partner.name || '');
    }
  }, [partner]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('logo', logo);

    // Check if partner exists to determine if it's an update or creation
    if (partner) {
      // Update partner
      await dispatch(updatePartner(partner._id, formData, token)); // Pass partner ID
    } else {
      // Create new partner
      await dispatch(sendPartnerData(formData, token));
    }

    onUpdate(); // Call onUpdate after successful submission
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: '1rem' }}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Logo:</label>
        <input type="file" onChange={(e) => setLogo(e.target.files[0])} />
      </div>
      <br/>
      <button type="submit" style={{ width: '20%', padding: '0.5rem', borderRadius: '0.25rem', border: 'none', backgroundColor: 'red', color: '#fff', cursor: 'pointer' }}>Submit</button>    </form>
  );
};

export default FormComponent;
