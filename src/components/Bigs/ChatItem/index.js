import React from 'react';
import IsMe from './IsMe';
import Other from './Other';

const ChatItem = ({isMe, text, date, photo, onDelete}) => {
  if (isMe) {
    return <IsMe text={text} date={date} onDelete={onDelete} />;
  }
  return <Other text={text} date={date} photo={photo} onDelete={onDelete} />;
};

export default ChatItem;

