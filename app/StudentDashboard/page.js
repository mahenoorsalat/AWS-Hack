"use client"

// pages/student/dashboard.jsx
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';

export default function StudentDashboard() {
  // States for the dashboard
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('Spanish');
  const [fontSize, setFontSize] = useState('medium'); // small, medium, large
  const [captionBgColor, setCaptionBgColor] = useState('bg-white');
  const [isReadAloud, setIsReadAloud] = useState(false);
  
  // Dummy data for transcription and translation
  const [transcription, setTranscription] = useState([
    "Welcome to today's class on renewable energy sources.",
    "We'll be discussing solar, wind, and hydroelectric power.",
    "These energy sources are crucial for a sustainable future.",
  ]);
  
  const [translation, setTranslation] = useState([
    "Bienvenido a la clase de hoy sobre fuentes de energía renovable.",
    "Hablaremos sobre energía solar, eólica e hidroeléctrica.",
    "Estas fuentes de energía son cruciales para un futuro sostenible.",
  ]);
  
  const [summary, setSummary] = useState("Today's lecture covers renewable energy sources including solar, wind, and hydroelectric power, explaining their importance for sustainability and environmental protection.");

  // Toggle microphone
  const toggleMicrophone = () => {
    setIsListening(!isListening);
    // Here you would implement the actual microphone recording functionality
    // using MediaRecorder or WebRTC
  };
  
  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };
  
  // Change font size
  const changeFontSize = (size) => {
    setFontSize(size);
  };
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Toggle read aloud
  const toggleReadAloud = () => {
    setIsReadAloud(!isReadAloud);
  };
  
  // Change caption background color
  const changeCaptionBg = (color) => {
    setCaptionBgColor(color);
  };

  // Handle language change
  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
    // Here you would fetch translations in the new language
  };

  // Font size class mapping
  const fontSizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg'
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
         <Head>
        <title>Student Dashboard | VoiceBridge</title>
        <meta name="description" content="VoiceBridge Student Learning Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    {/* Navbar */}
         <nav className={`bg-white shadow-sm`}>
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

      <div className="flex flex-1 overflow-hidden">
 {/* Sidebar */}
 <div className={`bg-white ${isSidebarCollapsed ? 'w-16' : 'w-64'} flex-shrink-0 shadow-lg transition-width duration-300 ease-in-out`}>
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
              <a href="#" className={`flex items-center py-3 px-4 bg-indigo-100 text-indigo-700`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className={`ml-3 ${isSidebarCollapsed ? 'hidden' : 'block'}`}>Dashboard</span>
              </a>
              <a href="#" className={`flex items-center py-3 px-4 text-gray-700 hover:bg-gray-100`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span className={`ml-3 ${isSidebarCollapsed ? 'hidden' : 'block'}`}>Assistant</span>
              </a>
              <a href="#" className={`flex items-center py-3 px-4 text-gray-700 hover:bg-gray-100`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className={`ml-3 ${isSidebarCollapsed ? 'hidden' : 'block'}`}>History</span>
              </a>
              <a href="#" className={`flex items-center py-3 px-4 text-gray-700 hover:bg-gray-100`}>
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
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Microphone Control Section */}
          <div className="p-6 flex justify-center">
            <div className="text-center">
              <button 
                onClick={toggleMicrophone}
                className={`w-20 h-20 rounded-full flex items-center justify-center ${isListening ? 'bg-red-500 animate-pulse' : 'bg-indigo-600'} shadow-lg hover:shadow-xl transition-all`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </button>
              <p className="mt-2 font-medium">
                {isListening ? "Listening..." : "Microphone is Off"}
              </p>
              <div className="mt-2">
                <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                  <option>Default Microphone</option>
                  <option>Headset Microphone</option>
                  <option>External Microphone</option>
                </select>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 p-6 overflow-auto">
            {/* Transcription Panel */}
            <div className="bg-white border-gray-200 border rounded-lg shadow overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg font-medium">Live Transcription</h3>
                <div className="flex items-center space-x-2">
                  <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                  <span className="text-sm text-green-500">Live</span>
                </div>
              </div>
              <div className={`p-4 h-64 overflow-y-auto ${fontSizeClasses[fontSize]}`}>
                {transcription.map((line, index) => (
                  <p 
                    key={index} 
                    className={`mb-3 p-2 rounded ${index === transcription.length - 1 ? 'bg-indigo-100 font-medium' : ''}`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>

            {/* Translation Panel */}
            <div className="bg-white border-gray-200 border rounded-lg shadow overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg font-medium">Translated Text</h3>
                <select 
                  value={selectedLanguage}
                  onChange={handleLanguageChange}
                  className="text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                  <option>Hindi</option>
                  <option>Mandarin</option>
                  <option>Arabic</option>
                </select>
              </div>
              <div className={`p-4 h-64 overflow-y-auto ${captionBgColor} ${fontSizeClasses[fontSize]}`}>
                {translation.map((line, index) => (
                  <p 
                    key={index} 
                    className={`mb-3 p-2 rounded ${index === translation.length - 1 ? 'bg-green-100 font-medium' : ''}`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>

            {/* Sign Language Avatar */}
            <div className="bg-white border-gray-200'} border rounded-lg shadow overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg font-medium">Visual Explanation</h3>
                <div className="flex items-center space-x-2">
                  <button className="p-1 rounded hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button className="p-1 rounded hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-4 h-64 flex flex-col items-center justify-center bg-gray-100">
                {/* Placeholder for the Avatar */}
                <div className="w-32 h-48 bg-gray-300 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="mt-4 w-full">
                  <label htmlFor="speed" className="block text-sm font-medium text-gray-700">
                    Speed
                  </label>
                  <input
                    type="range"
                    id="speed"
                    name="speed"
                    min="0.5"
                    max="2"
                    step="0.1"
                    defaultValue="1"
                    className="mt-1 w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* AI Summary Panel - Full width under the three panels */}
            <div className="md:col-span-3 bg-white border-gray-200 border rounded-lg shadow overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg font-medium">Summary (AI-Powered)</h3>
                <button className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200 text-sm flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Refresh Summary
                </button>
              </div>
              <div className={`p-4 ${fontSizeClasses[fontSize]}`}>
                <p>{summary}</p>
              </div>
            </div>
          </div>

          {/* Accessibility Toggles */}
          <div className="p-4 bg-gray-100 border-t flex flex-wrap items-center justify-between">
            <div className="flex items-center space-x-6">
              <div>
                <span className="block text-sm font-medium mb-1">Font Size</span>
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => changeFontSize('small')}
                    className={`w-8 h-8 flex items-center justify-center rounded ${fontSize === 'small' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
                  >
                    A
                  </button>
                  <button 
                    onClick={() => changeFontSize('medium')}
                    className={`w-8 h-8 flex items-center justify-center rounded ${fontSize === 'medium' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
                  >
                    A
                  </button>
                  <button 
                    onClick={() => changeFontSize('large')}
                    className={`w-8 h-8 flex items-center justify-center rounded ${fontSize === 'large' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
                  >
                    A
                  </button>
                </div>
              </div>
              
              <div>
                <span className="block text-sm font-medium mb-1">Read Aloud</span>
                <button 
                  onClick={toggleReadAloud}
                  className={`px-3 py-1 rounded ${isReadAloud ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
                >
                  {isReadAloud ? 'On' : 'Off'}
                </button>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
}