import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const ReusableFormComponent = ({ initialValues = {}, onUpdate, onDeleteSuccess, sendFormData, update ,inputFields}) => {
    const [title, setTitle] = useState(initialValues?.title || '');
    const [description, setDescription] = useState(initialValues?.description || '');
    const [file, setFile] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isFormOpen, setIsFormOpen] = useState(true);
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const token = user ? user.token : null;

    useEffect(() => {
        if (initialValues) {
            setTitle(initialValues.title || '');
            setDescription(initialValues.description || '');
        }
    }, [initialValues]);
      
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('file', file);

        try {
            if (initialValues) {
                await dispatch(update(initialValues._id, formData, token));
            } else {
                await dispatch(sendFormData(formData, token));
            }
            onUpdate(); 

            setTitle('');
            setDescription('');
            setFile(null);
            setSuccessMessage('Form submitted successfully');
            setErrorMessage('');
            setIsFormOpen(false);

            setTimeout(() => {
                setSuccessMessage('');
            }, 2000);
        } catch (error) {
            setSuccessMessage('');
            setErrorMessage('Error submitting form');
        }

        if (initialValues) {
            onUpdate();
        } else {
            onDeleteSuccess();
        }
    };

    return (
        isFormOpen && (
            <>
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

                {(successMessage || errorMessage) && (
                    <div style={{ position: 'fixed', top: 10, right: 10, backgroundColor: errorMessage ? 'red' : 'green', color: '#fff', padding: '10px', borderRadius: '5px', zIndex: 999 }}>
                        {errorMessage || successMessage}
                    </div>
                )}
            </>
        )
    );
};

export default ReusableFormComponent;
