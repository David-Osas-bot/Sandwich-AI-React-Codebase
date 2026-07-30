// import React, { useState, useEffect, useRef } from 'react';

// // Live API Configuration
// const CHAT_CONFIG = {
//   baseUrl: 'https://ai-staging.sandwichai.co/api/public/chat',
//   get platformApiKey() {
//     return (typeof window !== 'undefined' && window.SANDWICH_PLATFORM_API_KEY) || '';
//   }
// };

// const ChatWidget = () => {
//   // --- State Hooks ---
//   const [isOpen, setIsOpen] = useState(false);
//   const [inputValue, setInputValue] = useState('');
//   const [conversationId, setConversationId] = useState(null);
//   const [isTyping, setIsTyping] = useState(false);

//   const [messages, setMessages] = useState([
//     {
//       id: 'initial',
//       who: 'bot',
//       text: "Hi 👋 I'm the Sandwich assistant. Ask me about pricing, features, or book a live demo — what can I help with?"
//     }
//   ]);

//   // Track active suggestions/quick replies dynamically
//   const [suggestions, setSuggestions] = useState([
//     { label: "Pricing", query: "What plans and pricing do you offer?" },
//     { label: "Features", query: "What features does Sandwich include?" },
//     { label: "Book a demo", query: "I'd like to book a demo" },
//     { label: "Support", query: "I need help with setup" }
//   ]);

//   const chatBodyRef = useRef(null);

//   // --- Toggle Chat Handler (FIXED) ---
//   const toggleChat = () => setIsOpen(prev => !prev);

//   // --- Auto-scroll Effect ---
//   useEffect(() => {
//     if (chatBodyRef.current) {
//       chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
//     }
//   }, [messages, isTyping, suggestions, isOpen]);

//   // --- API Communications ---
//   const callChatApi = async (messageText) => {
//     const headers = { 'Content-Type': 'application/json' };
//     if (CHAT_CONFIG.platformApiKey) {
//       headers['X-API-Key'] = CHAT_CONFIG.platformApiKey;
//     }

//     const body = { message: messageText };
//     if (conversationId) {
//       body.conversation_id = conversationId; 
//     }

//     const res = await fetch(CHAT_CONFIG.baseUrl, {
//       method: 'POST',
//       headers,
//       body: JSON.stringify(body)
//     });

//     if (!res.ok) {
//       throw new Error('Chat API responded with status ' + res.status);
//     }
//     return res.json();
//   };

//   // --- Message Actions ---
//   const sendMessage = async (text) => {
//     if (!text.trim()) return;

//     // 1. Instantly render the user's message bubble
//     const userMsgId = `${Date.now()}-user`;
//     setMessages(prev => [...prev, { id: userMsgId, who: 'user', text }]);
//     setInputValue('');

//     // Clear out active chips while the bot generates its answer
//     setSuggestions([]);

//     // 2. Trigger Typing Animation State
//     setIsTyping(true);

//     try {
//       // 3. Make real-time REST request to backend gateway
//       const data = await callChatApi(text);
//       setIsTyping(false);

//       // Save returned conversation ID locally in memory
//       if (data.conversation_id) {
//         setConversationId(data.conversation_id);
//       }

//       // 4. Render the Bot's Response
//       const botMsgId = `${Date.now()}-bot`;
//       setMessages(prev => [...prev, {
//         id: botMsgId,
//         who: 'bot',
//         text: data.message || "Sorry, I didn't catch that — could you rephrase?"
//       }]);

//       // 5. Update with new dynamic suggestions from API (if any)
//       if (data.suggestions && data.suggestions.length > 0) {
//         setSuggestions(data.suggestions.map(s => ({ label: s, query: s })));
//       }

//     } catch (err) {
//       setIsTyping(false);
//       console.error('Sandwich chat exception occurred:', err);

//       // 6. Present Error State message if fetch fails
//       const errMsgId = `${Date.now()}-err`;
//       setMessages(prev => [...prev, {
//         id: errMsgId,
//         who: 'err',
//         text: "I'm having trouble reaching the assistant right now. Please try again in a moment, or use “Chat with us” below to reach the team directly."
//       }]);
//     }
//   };

//   return (
//     <>
//       {/* ===== CHATBOT TOGGLE BUTTON ===== */}
//       <button
//         id="chatToggle"
//         aria-label="Open chat assistant"
//         onClick={toggleChat}
//         className={isOpen ? 'open' : ''}
//         style={{ cursor: 'pointer' }}
//       >
//         <span className="ring"></span>
//         <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//           <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
//         </svg>
//         <span className="badge-dot"></span>
//       </button>

//       {/* ===== AI CHAT PANEL ===== */}
//       <div
//         id="chatPanel"
//         className={isOpen ? 'open' : ''}
//       >
//         {/* Chat Header */}
//         <div className="chat-head">
//           <div className="av">
//             {/* White Custom-Traced Sandwich Logo */}
//             <svg 
//               viewBox="0 0 100 100" 
//               style={{ width: '100%', height: '100%', display: 'block', color: '#fff' }}
//             >
//               <g 
//                 fill="none" 
//                 stroke="currentColor" 
//                 strokeWidth="6.5" 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round"
//               >
//                 <path d="M 76,22 L 44,22 C 30,22 22,30 22,43 C 25,47 30,35 34,35 C 38,35 40,43 44,43 C 48,43 50,35 54,35 C 58,35 60,43 64,43 C 68,43 70,35 74,35" />
//                 <path d="M 24,78 L 56,78 C 70,78 78,70 78,57 C 75,53 70,65 66,65 C 62,65 60,57 56,57 C 52,57 50,65 46,65 C 42,65 40,57 36,57 C 32,57 30,65 26,65" />
//               </g>
//             </svg>
//           </div>

//           <div className="meta">
//             <div className="nm">Sandwich Assistant</div>
//             <div className="st"><span className="d"></span>Online now</div>
//           </div>
//           <button className="close" id="chatClose" aria-label="Close chat" onClick={() => setIsOpen(false)}>
//             <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round">
//               <path d="M18 6L6 18M6 6l12 12" />
//             </svg>
//           </button>
//         </div>

//         {/* Chat Message Logs Container */}
//         <div className="chat-body" id="chatBody" ref={chatBodyRef}>
//           {/* Loop over and render active conversation thread */}
//           {messages.map((msg) => (
//             <div key={msg.id} className={`msg ${msg.who}`}>
//               {msg.text}
//             </div>
//           ))}

//           {/* Typing Loading Indicator */}
//           {isTyping && (
//             <div className="typing">
//               <span></span>
//               <span></span>
//               <span></span>
//             </div>
//           )}

//           {/* Quick Reply Chip Selection Container */}
//           {suggestions.length > 0 && (
//             <div className="quick-replies" id="quickReplies">
//               {suggestions.map((chip, index) => (
//                 <button
//                   key={`chip-${index}`}
//                   className="chip"
//                   onClick={() => sendMessage(chip.query)}
//                 >
//                   {chip.label}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Chat Input Controls */}
//         <div className="chat-input">
//           <input
//             type="text"
//             id="chatInput"
//             placeholder="Type a message..."
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             onKeyDown={(e) => {
//               if (e.key === 'Enter') sendMessage(inputValue);
//             }}
//           />
//           <button 
//             id="chatSend" 
//             aria-label="Send" 
//             onClick={() => sendMessage(inputValue)}
//           >
//             <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ChatWidget;







import React, { useState, useEffect, useRef } from 'react';

// Live API Configuration
const CHAT_CONFIG = {
  baseUrl: 'https://ai-staging.sandwichai.co/api/public/chat',
  get platformApiKey() {
    return (typeof window !== 'undefined' && window.SANDWICH_PLATFORM_API_KEY) || '';
  }
};

const ChatWidget = () => {
  // --- State Hooks ---
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [conversationId, setConversationId] = useState(null);
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 'initial',
      who: 'bot',
      text: "Hi 👋 I'm the Sandwich assistant. Ask me about pricing, features, or book a live demo — what can I help with?"
    }
  ]);

  // Track active suggestions/quick replies dynamically
  const [suggestions, setSuggestions] = useState([
    { label: "Pricing", query: "What plans and pricing do you offer?" },
    { label: "Features", query: "What features does Sandwich include?" },
    { label: "Book a demo", query: "I'd like to book a demo" },
    { label: "Support", query: "I need help with setup" }
  ]);

  const chatBodyRef = useRef(null);

  // --- Toggle Chat Handler (FIXED) ---
  const toggleChat = () => setIsOpen(prev => !prev);

  // --- Auto-scroll Effect ---
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, isTyping, suggestions, isOpen]);

  // Warn early, once, if the API key global was never set — this is a very
  // common reason the backend rejects requests with 401/403.
  useEffect(() => {
    if (!CHAT_CONFIG.platformApiKey) {
      console.warn(
        '[ChatWidget] window.SANDWICH_PLATFORM_API_KEY is not set. ' +
        'If the API requires an API key, every request will be sent without ' +
        'the X-API-Key header and may be rejected.'
      );
    }
  }, []);

  // --- API Communications ---
  const callChatApi = async (messageText) => {
    const headers = { 'Content-Type': 'application/json' };
    if (CHAT_CONFIG.platformApiKey) {
      headers['X-API-Key'] = CHAT_CONFIG.platformApiKey;
    }

    const body = { message: messageText };
    if (conversationId) {
      body.conversation_id = conversationId;
    }

    let res;
    try {
      res = await fetch(CHAT_CONFIG.baseUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify(body)
      });
    } catch (networkErr) {
      // fetch() only throws here for network-level failures — a blocked CORS
      // request, DNS failure, or the connection being refused/dropped. If
      // this fires, check DevTools > Console for a line containing "CORS":
      // that's almost always what a caught error at this exact point means.
      console.error(
        '[ChatWidget] Network-level failure calling chat API. This usually ' +
        'means the request was blocked by CORS (the API is not sending ' +
        'Access-Control-Allow-Origin for this site\'s origin), or the host ' +
        'is unreachable.',
        networkErr
      );
      throw networkErr;
    }

    if (!res.ok) {
      // Surface the actual status instead of masking it as a generic failure.
      let bodyText = '';
      try {
        bodyText = await res.text();
      } catch (_) {
        // ignore — some error responses have no readable body
      }
      console.error(
        `[ChatWidget] Chat API responded with ${res.status} ${res.statusText}.` +
        (res.status === 401 || res.status === 403
          ? ' This looks like an auth problem — check that window.SANDWICH_PLATFORM_API_KEY is set and valid.'
          : ''),
        bodyText
      );
      throw new Error(`Chat API responded with status ${res.status}`);
    }

    return res.json();
  };

  // --- Message Actions ---
  const sendMessage = async (text) => {
    if (!text.trim()) return;

    // 1. Instantly render the user's message bubble
    const userMsgId = `${Date.now()}-user`;
    setMessages(prev => [...prev, { id: userMsgId, who: 'user', text }]);
    setInputValue('');

    // Clear out active chips while the bot generates its answer
    setSuggestions([]);

    // 2. Trigger Typing Animation State
    setIsTyping(true);

    try {
      // 3. Make real-time REST request to backend gateway
      const data = await callChatApi(text);
      setIsTyping(false);

      // Save returned conversation ID locally in memory
      if (data.conversation_id) {
        setConversationId(data.conversation_id);
      }

      // 4. Render the Bot's Response
      const botMsgId = `${Date.now()}-bot`;
      setMessages(prev => [...prev, {
        id: botMsgId,
        who: 'bot',
        text: data.message || "Sorry, I didn't catch that — could you rephrase?"
      }]);

      // 5. Update with new dynamic suggestions from API (if any)
      if (data.suggestions && data.suggestions.length > 0) {
        setSuggestions(data.suggestions.map(s => ({ label: s, query: s })));
      }

    } catch (err) {
      setIsTyping(false);
      console.error('Sandwich chat exception occurred:', err);

      // 6. Present Error State message if fetch fails
      const errMsgId = `${Date.now()}-err`;
      setMessages(prev => [...prev, {
        id: errMsgId,
        who: 'err',
        text: "I'm having trouble reaching the assistant right now. Please try again in a moment, or use “Chat with us” below to reach the team directly."
      }]);
    }
  };

  return (
    <>
      {/* ===== CHATBOT TOGGLE BUTTON ===== */}
      <button
        id="chatToggle"
        aria-label="Open chat assistant"
        onClick={toggleChat}
        className={isOpen ? 'open' : ''}
        style={{ cursor: 'pointer' }}
      >
        <span className="ring"></span>
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
        </svg>
        <span className="badge-dot"></span>
      </button>

      {/* ===== AI CHAT PANEL ===== */}
      <div
        id="chatPanel"
        className={isOpen ? 'open' : ''}
      >
        {/* Chat Header */}
        <div className="chat-head">
          <div className="av">
            {/* White Custom-Traced Sandwich Logo */}
            <svg
              viewBox="0 0 100 100"
              style={{ width: '100%', height: '100%', display: 'block', color: '#fff' }}
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeWidth="6.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M 76,22 L 44,22 C 30,22 22,30 22,43 C 25,47 30,35 34,35 C 38,35 40,43 44,43 C 48,43 50,35 54,35 C 58,35 60,43 64,43 C 68,43 70,35 74,35" />
                <path d="M 24,78 L 56,78 C 70,78 78,70 78,57 C 75,53 70,65 66,65 C 62,65 60,57 56,57 C 52,57 50,65 46,65 C 42,65 40,57 36,57 C 32,57 30,65 26,65" />
              </g>
            </svg>
          </div>

          <div className="meta">
            <div className="nm">Sandwich Assistant</div>
            <div className="st"><span className="d"></span>Online now</div>
          </div>
          <button className="close" id="chatClose" aria-label="Close chat" onClick={() => setIsOpen(false)}>
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Chat Message Logs Container */}
        <div className="chat-body" id="chatBody" ref={chatBodyRef}>
          {/* Loop over and render active conversation thread */}
          {messages.map((msg) => (
            <div key={msg.id} className={`msg ${msg.who}`}>
              {msg.text}
            </div>
          ))}

          {/* Typing Loading Indicator */}
          {isTyping && (
            <div className="typing">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}

          {/* Quick Reply Chip Selection Container */}
          {suggestions.length > 0 && (
            <div className="quick-replies" id="quickReplies">
              {suggestions.map((chip, index) => (
                <button
                  key={`chip-${index}`}
                  className="chip"
                  onClick={() => sendMessage(chip.query)}
                >
                  {chip.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Chat Input Controls */}
        <div className="chat-input">
          <input
            type="text"
            id="chatInput"
            placeholder="Type a message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') sendMessage(inputValue);
            }}
          />
          <button
            id="chatSend"
            aria-label="Send"
            onClick={() => sendMessage(inputValue)}
          >
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;