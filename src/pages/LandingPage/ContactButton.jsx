import React, { useState } from 'react';
import ContactForm from './ContactUs';

const ContactUsButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatClick = () => {
    setIsChatOpen(prevState => !prevState); // Toggle the state
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  return (
    <div className="contact-us-button">
      <img
        src='/src/assets/chat.png'
        alt="Contact Us"
        style={{ cursor: 'pointer', width: '60px', height:'60px' }}
        onClick={handleChatClick}
      />
      <ContactForm isActive={isChatOpen} onClose={handleCloseChat} />
    </div>
  );
};

export default ContactUsButton;
