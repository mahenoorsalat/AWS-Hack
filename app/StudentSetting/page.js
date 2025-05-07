"use client"

import { useState } from 'react';
import { Bell, ChevronDown, Check, Moon, Sun, Upload } from 'lucide-react';
import Image from 'next/image';

// Sample user data
const defaultUser = {
  name: "Alex Johnson",
  email: "alex.johnson@example.edu",
  profilePicture: "/api/placeholder/64/64",
  language: {
    spoken: "English",
    output: "English",
    realTimeTranslation: false
  },
  avatar: {
    style: "3D",
    signLanguage: false,
    animationSpeed: 1,
    soundEffects: true
  },
  accessibility: {
    textSize: "Medium",
    voiceFeedback: false,
    highContrast: false
  },
  ai: {
    tone: "Friendly",
    summary: true,
    saveHistory: true
  },
  theme: {
    color: "#4f46e5", // indigo-600
    mode: "light",
    animations: true
  },
  security: {
    twoFactor: false,
    sessionTimeout: "30m"
  }
};

export default function StudentSetting() {
  const [user, setUser] = useState(defaultUser);
  const [activeTab, setActiveTab] = useState("personal");
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };
  
  // Function to update user settings
  const updateSettings = (category, setting, value) => {
    setUser(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: value
      }
    }));
  };
  
  // Function to handle direct updates to top-level user properties
  const updateUser = (field, value) => {
    setUser(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the data to your backend
    console.log("Settings saved:", user);
    // Show success message
    alert("Settings saved successfully!");
  };
  
  // Function to reset settings to default
  const handleReset = () => {
    setUser(defaultUser);
  };
  
  return (
  <>
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
                <a href="#" className="flex items-center py-3 px-4 text-gray-700 hover:bg-gray-100">
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
                <a href="#" className="flex items-center py-3 px-4 bg-indigo-100 text-indigo-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className={`ml-3 ${isSidebarCollapsed ? 'hidden' : 'block'}`}>Settings</span>
                </a>
              </nav>
            </div>
          </div>
    <main className="p-6 max-w-5xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Student Settings</h1>
      
      {/* Tabs for mobile */}
      <div className="flex overflow-x-auto mb-6 border-b border-gray-200 dark:border-gray-700">
        <button 
          onClick={() => setActiveTab("personal")}
          className={`px-4 py-2 whitespace-nowrap ${activeTab === "personal" ? "border-b-2 border-indigo-600 text-indigo-600" : "text-gray-500"}`}
        >
          Personal
        </button>
        <button 
          onClick={() => setActiveTab("language")}
          className={`px-4 py-2 whitespace-nowrap ${activeTab === "language" ? "border-b-2 border-indigo-600 text-indigo-600" : "text-gray-500"}`}
        >
          Language
        </button>
        <button 
          onClick={() => setActiveTab("avatar")}
          className={`px-4 py-2 whitespace-nowrap ${activeTab === "avatar" ? "border-b-2 border-indigo-600 text-indigo-600" : "text-gray-500"}`}
        >
          Avatar
        </button>
        <button 
          onClick={() => setActiveTab("accessibility")}
          className={`px-4 py-2 whitespace-nowrap ${activeTab === "accessibility" ? "border-b-2 border-indigo-600 text-indigo-600" : "text-gray-500"}`}
        >
          Accessibility
        </button>
        <button 
          onClick={() => setActiveTab("ai")}
          className={`px-4 py-2 whitespace-nowrap ${activeTab === "ai" ? "border-b-2 border-indigo-600 text-indigo-600" : "text-gray-500"}`}
        >
          AI Assistant
        </button>
        <button 
          onClick={() => setActiveTab("theme")}
          className={`px-4 py-2 whitespace-nowrap ${activeTab === "theme" ? "border-b-2 border-indigo-600 text-indigo-600" : "text-gray-500"}`}
        >
          Theme
        </button>
        <button 
          onClick={() => setActiveTab("security")}
          className={`px-4 py-2 whitespace-nowrap ${activeTab === "security" ? "border-b-2 border-indigo-600 text-indigo-600" : "text-gray-500"}`}
        >
          Security
        </button>
      </div>
      
      <form onSubmit={handleSubmit}>
        {/* 1. Personal Information Section */}
        <section className={`mb-8 ${activeTab === "personal" ? "" : "hidden md:block"}`}>
          <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200 flex items-center">
            <span className="mr-2">👤</span> Personal Information
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input 
                  type="text" 
                  value={user.name}
                  onChange={(e) => updateUser("name", e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email (read-only)
                </label>
                <input 
                  type="email" 
                  value={user.email}
                  readOnly
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-600 cursor-not-allowed dark:text-gray-300"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Profile Picture
                </label>
                <div className="flex items-center space-x-4">
                  <img 
                    src={user.profilePicture} 
                    alt="Profile" 
                    className="w-16 h-16 rounded-full object-cover border border-gray-200 dark:border-gray-700" 
                  />
                  <button 
                    type="button"
                    className="flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Upload New Picture
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* 2. Language Preferences Section */}
        <section className={`mb-8 ${activeTab === "language" ? "" : "hidden md:block"}`}>
          <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200 flex items-center">
            <span className="mr-2">🌍</span> Language Preferences
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Preferred Spoken Language
                </label>
                <select 
                  value={user.language.spoken}
                  onChange={(e) => updateSettings("language", "spoken", e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Japanese">Japanese</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Preferred Output Language
                </label>
                <select 
                  value={user.language.output}
                  onChange={(e) => updateSettings("language", "output", e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Japanese">Japanese</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="realTimeTranslation"
                    checked={user.language.realTimeTranslation}
                    onChange={(e) => updateSettings("language", "realTimeTranslation", e.target.checked)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="realTimeTranslation" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                    Enable Real-time Translation
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* 3. Avatar Settings Section */}
        <section className={`mb-8 ${activeTab === "avatar" ? "" : "hidden md:block"}`}>
          <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200 flex items-center">
            <span className="mr-2">🤖</span> Avatar Settings
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Choose Avatar Style
                </label>
                <select 
                  value={user.avatar.style}
                  onChange={(e) => updateSettings("avatar", "style", e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="2D">2D (Static)</option>
                  <option value="3D">3D (Rendered)</option>
                  <option value="Cartoon">Cartoon</option>
                  <option value="Realistic">Realistic</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Avatar Animation Speed
                </label>
                <div className="flex items-center space-x-2">
                  <input 
                    type="range" 
                    min="1" 
                    max="3" 
                    step="0.5"
                    value={user.avatar.animationSpeed}
                    onChange={(e) => updateSettings("avatar", "animationSpeed", parseFloat(e.target.value))}
                    className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-300 w-10">{user.avatar.animationSpeed}x</span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="signLanguage"
                    checked={user.avatar.signLanguage}
                    onChange={(e) => updateSettings("avatar", "signLanguage", e.target.checked)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="signLanguage" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                    Enable Sign Language Avatar
                  </label>
                </div>
              </div>
              
              <div>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="soundEffects"
                    checked={user.avatar.soundEffects}
                    onChange={(e) => updateSettings("avatar", "soundEffects", e.target.checked)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="soundEffects" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                    Avatar Sound Effects
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* 4. Accessibility Options Section */}
        <section className={`mb-8 ${activeTab === "accessibility" ? "" : "hidden md:block"}`}>
          <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200 flex items-center">
            <span className="mr-2">📱</span> Accessibility Options
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Text Size
                </label>
                <select 
                  value={user.accessibility.textSize}
                  onChange={(e) => updateSettings("accessibility", "textSize", e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                  <option value="Extra Large">Extra Large</option>
                </select>
              </div>
              
              <div className="md:col-span-2 space-y-4">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="voiceFeedback"
                    checked={user.accessibility.voiceFeedback}
                    onChange={(e) => updateSettings("accessibility", "voiceFeedback", e.target.checked)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="voiceFeedback" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                    Enable Voice Feedback (for blind/low-vision users)
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="highContrast"
                    checked={user.accessibility.highContrast}
                    onChange={(e) => updateSettings("accessibility", "highContrast", e.target.checked)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="highContrast" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                    High Contrast Mode
                  </label>
                </div>
                
                <div>
                  <button 
                    type="button"
                    className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    Keyboard Shortcuts Help
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* 5. AI Assistant Settings Section */}
        <section className={`mb-8 ${activeTab === "ai" ? "" : "hidden md:block"}`}>
          <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200 flex items-center">
            <span className="mr-2">✨</span> AI Assistant Settings
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Default Tone of Responses
                </label>
                <select 
                  value={user.ai.tone}
                  onChange={(e) => updateSettings("ai", "tone", e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="Friendly">Friendly</option>
                  <option value="Formal">Formal</option>
                  <option value="Simplified">Simplified</option>
                  <option value="Technical">Technical</option>
                  <option value="Encouraging">Encouraging</option>
                </select>
              </div>
              
              <div className="md:col-span-2 space-y-4">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="aiSummary"
                    checked={user.ai.summary}
                    onChange={(e) => updateSettings("ai", "summary", e.target.checked)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="aiSummary" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                    Enable AI Summary at End of Lessons
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="saveHistory"
                    checked={user.ai.saveHistory}
                    onChange={(e) => updateSettings("ai", "saveHistory", e.target.checked)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="saveHistory" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                    Save Assistant History (Privacy Control)
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* 6. Theme Customization Section */}
        <section className={`mb-8 ${activeTab === "theme" ? "" : "hidden md:block"}`}>
          <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200 flex items-center">
            <span className="mr-2">🎨</span> Theme Customization
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Theme Color
                </label>
                <div className="flex items-center space-x-2">
                  <input 
                    type="color" 
                    value={user.theme.color}
                    onChange={(e) => updateSettings("theme", "color", e.target.value)}
                    className="w-8 h-8 border-0 rounded-md cursor-pointer"
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-300">{user.theme.color}</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  UI Mode
                </label>
                <div className="flex space-x-4">
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="lightMode"
                      name="themeMode"
                      value="light"
                      checked={user.theme.mode === "light"}
                      onChange={() => updateSettings("theme", "mode", "light")}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                    />
                    <label htmlFor="lightMode" className="ml-2 flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <Sun className="h-4 w-4 mr-1" /> Light
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="darkMode"
                      name="themeMode"
                      value="dark"
                      checked={user.theme.mode === "dark"}
                      onChange={() => updateSettings("theme", "mode", "dark")}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                    />
                    <label htmlFor="darkMode" className="ml-2 flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <Moon className="h-4 w-4 mr-1" /> Dark
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="autoMode"
                      name="themeMode"
                      value="auto"
                      checked={user.theme.mode === "auto"}
                      onChange={() => updateSettings("theme", "mode", "auto")}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                    />
                    <label htmlFor="autoMode" className="ml-2 text-sm text-gray-700 dark:text-gray-300">Auto</label>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="animations"
                    checked={user.theme.animations}
                    onChange={(e) => updateSettings("theme", "animations", e.target.checked)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="animations" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                    Enable UI Animations
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* 7. Security Section */}
        <section className={`mb-8 ${activeTab === "security" ? "" : "hidden md:block"}`}>
          <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200 flex items-center">
            <span className="mr-2">🔐</span> Security
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <button 
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  Change Password
                </button>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Session Timeout (Inactivity)
                </label>
                <select 
                  value={user.security.sessionTimeout}
                  onChange={(e) => updateSettings("security", "sessionTimeout", e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="15m">15 minutes</option>
                  <option value="30m">30 minutes</option>
                  <option value="1h">1 hour</option>
                  <option value="2h">2 hours</option>
                </select>
              </div>
              
              <div>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="twoFactor"
                    checked={user.security.twoFactor}
                    onChange={(e) => updateSettings("security", "twoFactor", e.target.checked)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="twoFactor" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                    Enable Two-Factor Authentication
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Save & Reset Buttons */}
        <div className="flex justify-end gap-4 mt-8">
          <button 
            type="button"
            onClick={handleReset}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            Reset to Default
          </button>
          <button 
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save Changes
          </button>
        </div>
      </form>
    </main>
    </div>
    </div>

  
  </>
  );
}