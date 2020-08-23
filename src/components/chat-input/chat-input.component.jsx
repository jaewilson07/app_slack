import React, { useState } from 'react';
import firebase from 'firebase';

import { useStateValue } from '../../state/state-provider';
import db from '../../firestore/firbase-utils';

import './chat-input.styles.scss';

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState('');
  const [{ currentUser }] = useStateValue();

  const sendMessage = (event) => {
    event.preventDefault();
    console.log(channelName, channelId);

    if (channelId) {
      db.collection('rooms').doc(channelId).collection('messages').add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: currentUser.userName,
        userImage: currentUser.userImage,
      });
      setInput('');
    }
  };
  return (
    <div className="chat__input">
      <form>
        <div className="chat__text">
          <textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyPress={(event) => {
              if (event.which === 13 && !event.shiftKey) {
                sendMessage(event);
              }
            }}
          />
        </div>
      </form>
    </div>
  );
}

export default ChatInput;
