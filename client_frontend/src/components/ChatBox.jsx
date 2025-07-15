import React, { useContext, useState, useRef, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { useFetchRecipientUser } from "../hooks/useFetchRecipient";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/ChatBox_new.css';
import { FaUser, FaPaperPlane, FaSmile } from 'react-icons/fa';
import moment from 'moment';
import { Stack } from 'react-bootstrap';
import InputEmoji from 'react-input-emoji';

const ChatBox = () => {
  const { user } = useContext(AuthContext);
  const { currentChat, messages, isMessagesLoading, sendTextMessage, notifications, setNotifications } = useContext(ChatContext);
  const { recipientUser } = useFetchRecipientUser(currentChat, user);
  const [textMessage, setTextMessage] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    scrollToBottom();
  }, []);

  useEffect(() => {
    if (recipientUser) {
      setNotifications(prevNotifications =>
        prevNotifications.map(n =>
          n.senderId === recipientUser._id ? { ...n, isRead: true } : n
        )
      );
    }
  }, [recipientUser, setNotifications]);

  if (!recipientUser) {
    return (
      <div className="chatbox-empty">
        <div className="empty-chat-state">
          <div className="empty-chat-icon">
            <FaUser />
          </div>
          <h5>Select a conversation</h5>
          <p>Choose from your existing conversations or start a new one</p>
        </div>
      </div>
    );
  }

  if (isMessagesLoading) {
    return (
      <div className="chatbox-loading">
        <div className="loading-chat-state">
          <div className="spinner-custom"></div>
          <p>Loading messages...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="chatbox-container">
      {/* Chat Header */}
      <div className="chat-header">
        <div className="recipient-info">
          <div className="recipient-avatar">
            <FaUser />
          </div>
          <div className="recipient-details">
            <h5 className="recipient-name">{recipientUser.name}</h5>
            <span className="recipient-status">Online</span>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="messages-container">
        <div className="messages-list">
          {messages && messages.map((message, index) => (
            <div
              key={index}
              className={`message-bubble ${message.senderId === user._id ? 'sent' : 'received'}`}
            >
              <div className="message-content">
                <div className="message-text">{message.text}</div>
                <div className="message-time">{moment(message.createdAt).format('HH:mm')}</div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Message Input */}
      <div className="message-input-container">
        <div className="input-wrapper">
          <InputEmoji
            value={textMessage}
            onChange={setTextMessage}
            cleanOnEnter
            onEnter={() => {
              if (textMessage.trim()) {
                sendTextMessage(textMessage, user, currentChat._id, setTextMessage);
                setTextMessage("");
                scrollToBottom();
              }
            }}
            placeholder="Type your message..."
            className="message-input"
          />
          <button 
            className="send-button" 
            onClick={() => {
              if (textMessage.trim()) {
                sendTextMessage(textMessage, user, currentChat._id, setTextMessage);
                setTextMessage("");
                scrollToBottom();
              }
            }}
            disabled={!textMessage.trim()}
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
