import React from 'react';

const Message = ({ message }) => {
  return (
    <div className="message">
      <p style={{ textAlign: "justify" }}>
        {message.content}
      </p>
    </div>
  );
};

export default Message;
