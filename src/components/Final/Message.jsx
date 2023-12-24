import React from 'react';

const Message = ({ message }) => {
  return (
    <div className="message">
      {message.content} {/* This is correct */}
    </div>
  );
};

export default Message;
