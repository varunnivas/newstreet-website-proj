import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sendPartnerData, updatePartner } from '../redux/actions';
import { useSelector } from 'react-redux';
const FormComponent = ({ partner, onUpdate }) => {
  const [name, setName] = useState('');
  const [logo, setLogo] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const token = user ? user.token : null;
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

    try {
      // Check if partner exists to determine if it's an update or creation
      if (partner) {
        // Update partner
        await dispatch(updatePartner(partner._id, formData, token)); // Pass partner ID
        setSuccessMessage('Partner updated successfully');
      } else {
        // Create new partner
        await dispatch(sendPartnerData(formData, token));
        setSuccessMessage('Partner added successfully');
      }

      onUpdate();
    } catch (error) {
      setErrorMessage('Error submitting partner');
    }

    // Set timeout to clear the success or error message after 2 seconds
    setTimeout(() => {
      setSuccessMessage('');
      setErrorMessage('');
    }, 2000);
  };

  return (
    <div style={{ position: 'relative' }}>
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
        <button type="submit" style={{ width: '20%', padding: '0.5rem', borderRadius: '0.25rem', border: 'none', backgroundColor: 'red', color: '#fff', cursor: 'pointer' }}>Submit</button>
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

export default FormComponent;
