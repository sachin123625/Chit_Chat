import React, { useContext, useState, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faRocket, faUsers, faHeart, faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";
import "../assets/Chat_new.css";
import logo from '../assets/logo.png';
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import UserChat from "../components/UserChat";
import ChatBox from "../components/ChatBox";
import { useNavigate } from 'react-router-dom';

const Chat = () => {
  const { user } = useContext(AuthContext);
  const { userChats, isUserChatsLoading, userChatsError, updateCurrentChat, potentialChats, createChat, onlineUsers } = useContext(ChatContext);
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [showPotentials, setShowPotentials] = useState(true);

  const handleGetStarted = () => {
    navigate('/login');
  };

  const filteredChats = useMemo(() => {
    if (!search) return userChats;
    return userChats?.filter(c => {
      const participants = c?.membersData?.map(m => m?.name || m?.username || "").join(" ") || "";
      return participants.toLowerCase().includes(search.toLowerCase());
    });
  }, [search, userChats]);

  return (
    <>
      {user ? (
        <div className="chat-container">
          <div className="users-column">
            <div className="users-header d-flex flex-column gap-2">
              <div className="d-flex justify-content-between align-items-center w-100">
                <h5 className="mb-0">Your Chats</h5>
                <span className="online-count" title="Currently online users">{onlineUsers?.length || 0} online</span>
              </div>
              <div className="chat-search-wrapper position-relative">
                <FontAwesomeIcon icon={faSearch} className="chat-search-icon" />
                <input
                  type="text"
                  className="chat-search-input"
                  placeholder="Search chats..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className="d-flex justify-content-between mt-1 small text-muted">
                <span>{filteredChats?.length || 0} chats</span>
                {potentialChats?.length > 0 && (
                  <button className="toggle-potentials-btn" onClick={() => setShowPotentials(p => !p)}>
                    {showPotentials ? 'Hide' : 'Show'} suggestions
                  </button>
                )}
              </div>
            </div>
            
            <div className="users-list">
              {isUserChatsLoading && (
                <div className="loading-state">
                  <div className="spinner-custom"></div>
                  <p>Grabbing your chats...</p>
                  <small>Just a sec!</small>
                  <div className="mt-3 chat-skeleton-stack">
                    {Array.from({ length: 4 }).map((_,i)=>(<div key={i} className="chat-skel-line" />))}
                  </div>
                </div>
              )}
              {userChatsError && !isUserChatsLoading && (
                <div className="empty-state">
                  <p className="text-danger mb-1">Could not load chats</p>
                  <small>{userChatsError?.message || 'Try again later.'}</small>
                </div>
              )}
              {!isUserChatsLoading && !userChatsError && filteredChats?.length > 0 && (
                filteredChats.map((chat, index) => (
                  <div 
                    key={index} 
                    className="user-chat-item"
                    onClick={() => updateCurrentChat(chat)}
                  >
                    <UserChat chat={chat} user={user} onlineUsers={onlineUsers} />
                  </div>
                ))
              )}
              {!isUserChatsLoading && !userChatsError && (!filteredChats || filteredChats.length === 0) && (
                <div className="empty-state">
                  <FontAwesomeIcon icon={faCommentDots} className="empty-icon" />
                  <p>{search ? 'No chats match your search' : 'Your chat list is looking lonely'}</p>
                  <small>{search ? 'Try a different keyword.' : 'Reach out to someone and break the ice!'}</small>
                </div>
              )}
              {showPotentials && potentialChats?.length > 0 && (
                <div className="potential-chats-section">
                  <h6 className="section-title">Suggested Connections</h6>
                  {potentialChats.map((potentialChat, index) => (
                    <div 
                      key={index} 
                      className="user-chat-item potential-chat" 
                      onClick={() => createChat(user._id, potentialChat._id)}
                      title="Start a new chat"
                    >
                      <UserChat chat={potentialChat} user={user} onlineUsers={onlineUsers} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="chat-column">
            <div className="chat-column-top-bar d-flex justify-content-between align-items-center px-4 py-3">
              <h6 className="mb-0 fw-semibold text-truncate">Conversation</h6>
              <button className="btn-new-chat" onClick={() => setShowPotentials(true)} title="Find new people">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
            <ChatBox />
          </div>
        </div>
      ) : (
        <div className="welcome-container">
          <div className="welcome-content fade-in">
            <div className="row align-items-center">
              <div className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0">
                <div className="welcome-text">
                  <h1 className="welcome-title" style={{ fontSize: '4.2rem', lineHeight: '1.05' }}>
                    Connect. Share. <br />
                    <span className="text-gradient">In Real Time.</span>
                  </h1>
                  <p className="welcome-subtitle" style={{ fontSize: '1.3rem' }}>
                    A sleek, privacy‑focused chat app with instant delivery, smart suggestions, and a soothing dark interface.
                  </p>
                  <div className="feature-highlights mt-4">
                    <div className="feature-item">
                      <FontAwesomeIcon icon={faRocket} className="feature-icon" />
                      <span>Crazy Fast</span>
                    </div>
                    <div className="feature-item">
                      <FontAwesomeIcon icon={faUsers} className="feature-icon" />
                      <span>Find Your People</span>
                    </div>
                    <div className="feature-item">
                      <FontAwesomeIcon icon={faHeart} className="feature-icon" />
                      <span>Built For You</span>
                    </div>
                  </div>
                  <div className="cta-buttons mt-4">
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
                  <img 
                    src={logo} 
                    alt="Chit Chat Logo" 
                    className="img-fluid hero-image" 
                    style={{ maxWidth: '160px', width: '100%', height: 'auto' }}
                  />
                  {/* Improved floating bubbles */}
                  <div className="hero-bubbles">
                    <div className="bubble bubble-dark">
                      <FontAwesomeIcon icon={faCommentDots} className="me-2" />
                      <span>Got something to share?</span>
                    </div>
                    <div className="bubble bubble-accent">
                      <span>👋 Who's online now?</span>
                    </div>
                  </div>
                  {/* Removed old floating-card elements */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
