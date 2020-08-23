import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Chat.styles.scss';

import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import db from '../../firestore/firbase-utils';
import ChatMessage from '../chat-message/chat-message.component';
import ChatInput from '../chat-input/chat-input.component';

function Chat() {
  const { roomId } = useParams();

  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState(null);

  useEffect(() => {
    if (roomId) {
      db.collection('rooms')
        .doc(roomId)
        .onSnapshot((snapshot) => {
          const roomDetails = snapshot.data();
          if (roomDetails) {
            setRoomDetails(roomDetails);
          } else {
            setRoomDetails({ name: roomId });
          }
        });

      db.collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) =>
          setRoomMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [roomId]);

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__header_left">
          <h4 className="chat__channel_name">
            <strong>{`#${roomDetails?.name}`}</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="chat__header_right">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>
      <div className="chat__messages">
        {roomMessages?.map(({ message, timestamp, user, userImage }, index) => (
          <ChatMessage
            key={index}
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
          />
        ))}
      </div>
      <div className="chat__bottom">
        <ChatInput channelName={roomDetails?.name} channelId={roomId} />
      </div>
    </div>
  );
}

export default Chat;
