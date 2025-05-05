"use client"

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

import { MessageSquare, Send, Mic, Volume2, Copy, Download, Lightbulb, Globe, ChevronDown } from 'lucide-react';

export default function StudentAssistant() {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };
  
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hello! I'm your AI assistant powered by Amazon Bedrock. How can I help you with today's lesson?", 
      sender: 'ai', 
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const languages = ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese'];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (text = inputText) => {
    if (!text.trim()) return;
    
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: text,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsThinking(true);
    
    // In a real app, you would call your API here to get a response from Amazon Bedrock
    // For demo purposes, we'll simulate a response after a delay
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        text: "I understand your question about today's lesson. The concept of neural networks was covered, which are computing systems inspired by biological neural networks in animal brains. They're a foundation of deep learning, a subset of machine learning in AI. Would you like me to explain any specific aspect in more detail?",
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsThinking(false);
    }, 1500);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleQuickQuestion = (question) => {
    setInputText(question);
    sendMessage(question);
  };

  const quickQuestions = [
    "Can you summarize what the teacher said?",
    "What does 'neural network' mean?",
    "Translate the last concept to simple terms.",
    "Give a real-life example of this."
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
   {/* Navbar */}
          <nav className="bg-white shadow-sm ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0 flex items-center">
                    <div className="h-30 w-30 relative">
                      <Image 
                        src="/BlackNoBG.png" 
                        alt="VoiceBridge Logo" 
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                
                </div>
                <div className="flex items-center">
                  <div className="relative">
                    <button className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100">
                      <div className="h-8 w-8 bg-indigo-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-medium">JS</span>
                      </div>
                      <span>John Smith</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    {/* Dropdown menu would go here */}
                  </div>
                </div>
              </div>
            </div>
          </nav>
      
      {/* Main content with sidebar */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className={`bg-white ${isSidebarCollapsed ? 'w-16' : 'w-64'} fixed flex-shrink-0 h-screen shadow-lg transition-all duration-300`}>
          <div className="h-full flex flex-col">
            <div className="p-4 flex justify-between items-center">
              <h2 className={`font-medium ${isSidebarCollapsed ? 'hidden' : 'block'}`}>Navigation</h2>
              <button onClick={toggleSidebar} className="p-1 rounded-md hover:bg-gray-200 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isSidebarCollapsed ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                  )}
                </svg>
              </button>
            </div>
            <nav className="flex-1 pt-4">
              <a href="#" className="flex items-center py-3 px-4 text-gray-700 hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className={`ml-3 ${isSidebarCollapsed ? 'hidden' : 'block'}`}>Dashboard</span>
              </a>
              <a href="#" className="flex items-center py-3 px-4 bg-indigo-100 text-indigo-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span className={`ml-3 ${isSidebarCollapsed ? 'hidden' : 'block'}`}>Assistant</span>
              </a>
              <a href="#" className="flex items-center py-3 px-4 text-gray-700 hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className={`ml-3 ${isSidebarCollapsed ? 'hidden' : 'block'}`}>History</span>
              </a>
              <a href="#" className="flex items-center py-3 px-4 text-gray-700 hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className={`ml-3 ${isSidebarCollapsed ? 'hidden' : 'block'}`}>Settings</span>
              </a>
            </nav>
          </div>
        </div>
        
        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="flex-1 overflow-hidden flex flex-col">
            {/* Welcome Banner */}
        <div className="bg-indigo-600 text-white p-4 shadow-md">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white rounded-full p-2">
                <MessageSquare className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Ask Me Anything</h1>
                <p className="text-indigo-100">Get help with your lesson using AI-powered support.</p>
              </div>
            </div>
            
            {/* Language Selector */}
            <div className="relative">
              <button 
                className="flex items-center space-x-2 bg-indigo-700 hover:bg-indigo-800 text-white px-3 py-2 rounded-md transition-colors"
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              >
                <Globe className="h-4 w-4" />
                <span>{selectedLanguage}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {showLanguageDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                  <ul className="py-1">
                    {languages.map(language => (
                      <li 
                        key={language}
                        className="px-4 py-2 hover:bg-indigo-100 cursor-pointer"
                        onClick={() => {
                          setSelectedLanguage(language);
                          setShowLanguageDropdown(false);
                        }}
                      >
                        {language}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Chat Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          <div className="max-w-3xl mx-auto space-y-4">
            {messages.map(message => (
              <div 
                key={message.id} 
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`rounded-lg p-4 max-w-md shadow-sm ${
                  message.sender === 'user' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-white text-gray-800 border border-gray-200'
                }`}>
                  <p className="whitespace-pre-wrap">{message.text}</p>
                  <div className={`flex justify-between items-center mt-2 text-xs ${
                    message.sender === 'user' ? 'text-indigo-200' : 'text-gray-500'
                  }`}>
                    <span>{message.timestamp}</span>
                    <div className="flex space-x-2">
                      {message.sender === 'ai' && (
                        <>
                          <button className="hover:text-indigo-600">
                            <Volume2 className="h-4 w-4" />
                          </button>
                          <button className="hover:text-indigo-600">
                            <Copy className="h-4 w-4" />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {isThinking && (
              <div className="flex justify-start">
                <div className="bg-white rounded-lg p-4 max-w-md shadow-sm border border-gray-200">
                  <div className="flex space-x-2 items-center">
                    <div className="h-2 w-2 bg-indigo-600 rounded-full animate-pulse"></div>
                    <div className="h-2 w-2 bg-indigo-600 rounded-full animate-pulse delay-100"></div>
                    <div className="h-2 w-2 bg-indigo-600 rounded-full animate-pulse delay-200"></div>
                    <span className="text-sm text-gray-500 ml-2">Thinking...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
        
        {/* Quick Suggestions */}
        <div className="bg-gray-100 border-t border-gray-200">
          <div className="max-w-3xl mx-auto py-3 px-4">
            <div className="flex items-center mb-2">
              {/* Using raw SVG instead of Lightbulb component */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-indigo-600 mr-2">
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                <path d="M9 18h6"></path>
                <path d="M10 22h4"></path>
              </svg>
              <span className="text-sm font-medium text-gray-700">Try asking...</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  className="text-xs bg-white border border-gray-300 hover:border-indigo-600 text-gray-700 px-3 py-1 rounded-full transition-colors"
                  onClick={() => handleQuickQuestion(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Message Input Area */}
        <div className="bg-white border-t border-gray-200 p-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
              <div>
                <span>Powered by Amazon Bedrock (Claude)</span>
              </div>
              {isThinking ? 
                <span>Thinking...</span> : 
                <span>Ready to respond</span>
              }
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="flex-1 bg-gray-100 rounded-lg border border-gray-300 focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <textarea
                  ref={inputRef}
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="block w-full bg-transparent border-0 resize-none px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:ring-0 sm:text-sm"
                  placeholder="Ask a question about the class..."
                  rows={1}
                />
              </div>
              <button
                className="p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                onClick={() => sendMessage()}
                disabled={isThinking || !inputText.trim()}
              >
                <Send className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors">
                <Mic className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
              </div>
        </div>
      </div>
    </div>
  );
}