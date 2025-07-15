import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faRocket, faUsers, faHeart } from "@fortawesome/free-solid-svg-icons";
import "../assets/Chat_new.css";
import slider1 from '../assets/slider1.png';
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import UserChat from "../components/UserChat";
import ChatBox from "../components/ChatBox";
import { useNavigate } from 'react-router-dom';

const Chat = () => {
  const { user } = useContext(AuthContext);
  const { userChats, isUserChatsLoading, userChatsError, updateCurrentChat, potentialChats, createChat, onlineUsers } = useContext(ChatContext);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <>
      {user ? (
        <div className="chat-container">
          <div className="users-column">
            <div className="users-header">
              <h5 className="mb-0">Messages</h5>
              <span className="online-count">{onlineUsers?.length || 0} online</span>
            </div>
            
            <div className="users-list">
              {isUserChatsLoading && (
                <div className="loading-state">
                  <div className="spinner-custom"></div>
                  <p>Loading chats...</p>
                </div>
              )}
              
              {userChats?.length > 0 ? (
                userChats.map((chat, index) => (
                  <div 
                    key={index} 
                    className="user-chat-item"
                    onClick={() => updateCurrentChat(chat)}
                  >
                    <UserChat chat={chat} user={user} onlineUsers={onlineUsers} />
                  </div>
                ))
              ) : (
                !isUserChatsLoading && (
                  <div className="empty-state">
                    <FontAwesomeIcon icon={faCommentDots} className="empty-icon" />
                    <p>No conversations yet</p>
                    <small>Start a new chat to begin messaging</small>
                  </div>
                )
              )}
              
              {potentialChats?.length > 0 && (
                <div className="potential-chats-section">
                  <h6 className="section-title">Start New Chat</h6>
                  {potentialChats.map((potentialChat, index) => (
                    <div 
                      key={index} 
                      className="user-chat-item potential-chat" 
                      onClick={() => createChat(user._id, potentialChat._id)}
                    >
                      <UserChat chat={potentialChat} user={user} onlineUsers={onlineUsers} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="chat-column">
            <ChatBox />
          </div>
        </div>
      ) : (
        <div className="welcome-container">
          <div className="welcome-content fade-in">
            <div className="row align-items-center">
              <div className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0">
                <div className="welcome-text">
                  <h1 className="welcome-title">
                    Connect with Friends
                    <br />
                    <span className="text-gradient">Anywhere, Anytime</span>
                  </h1>
                  <p className="welcome-subtitle">
                    Experience seamless messaging with Chit Chat. Connect with friends, 
                    share moments, and stay in touch with our modern, fast, and secure 
                    messaging platform.
                  </p>
                  
                  <div className="feature-highlights">
                    <div className="feature-item">
                      <FontAwesomeIcon icon={faRocket} className="feature-icon" />
                      <span>Lightning Fast</span>
                    </div>
                    <div className="feature-item">
                      <FontAwesomeIcon icon={faUsers} className="feature-icon" />
                      <span>Connect with Anyone</span>
                    </div>
                    <div className="feature-item">
                      <FontAwesomeIcon icon={faHeart} className="feature-icon" />
                      <span>Made with Love</span>
                    </div>
                  </div>
                  
                  <div className="cta-buttons">
                    <button 
                      className="btn btn-primary-custom btn-lg"
                      onClick={handleGetStarted}
                    >
                      <FontAwesomeIcon icon={faCommentDots} className="me-2" />
                      Get Started
                    </button>
                    <a href="/about" className="btn btn-secondary-custom btn-lg ms-3">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-6 text-center">
                <div className="welcome-image">
                  <img src={slider1} alt="Chat Illustration" className="img-fluid hero-image" />
                  <div className="image-overlay">
                    <div className="floating-card">
                      <div className="card-content">
                        <FontAwesomeIcon icon={faCommentDots} />
                        <span>Start Chatting</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="creator-credit">
              <p className="mb-0">
                <small>
                  Designed & Developed with ❤️ by <strong>Sachin Maurya</strong>
                </small>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
