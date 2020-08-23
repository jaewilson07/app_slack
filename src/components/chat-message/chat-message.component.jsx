import React from 'react';

import './chat-message.styles.scss';

function ChatMessage({ message, timestamp, user, userImage }) {
  return (
    <div className="message">
      <img src={userImage} alt="user" />
      <div className="message__info">
        <h4>
          {user}{' '}
          <span className="message__timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>

        <p>{message}</p>
      </div>
    </div>
  );
}

export default ChatMessage;
