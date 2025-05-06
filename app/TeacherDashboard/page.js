"use client"

// TeacherDashboard.jsx
import { useState, useEffect } from 'react';
import { 
  HomeIcon, 
  ClockIcon, 
  CogIcon, 
  MicrophoneIcon,
  PaperAirplaneIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function TeacherDashboard() {
    const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const [isLive, setIsLive] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [transcription, setTranscription] = useState([]);
  const [connectedStudents, setConnectedStudents] = useState([
    { id: 1, name: 'Alex Johnson', online: true, feedback: '👍' },
    { id: 2, name: 'Sam Parker', online: true, feedback: '❓' },
    { id: 3, name: 'Jamie Smith', online: true, feedback: null },
    { id: 4, name: 'Taylor Wilson', online: false, feedback: null },
  ]);
  
  const [questions, setQuestions] = useState([
    { id: 1, student: 'Sam Parker', question: 'Could you explain the concept again?', time: '10:15 AM' },
  ]);
  
  const [stats, setStats] = useState({
    speakingTime: '00:05:32',
    questionsAsked: 3,
    studentInteractions: 8
  });
  
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'zh', name: 'Chinese' }
  ];

    // Toggle sidebar
    const toggleSidebar = () => {
        setSidebarCollapsed(!isSidebarCollapsed);
      };
  // Simulate receiving new transcription during live session
  useEffect(() => {
    if (isLive) {
      const timer = setInterval(() => {
        const newLine = {
          id: transcription.length + 1,
          text: "This is a simulated transcription line for demonstration purposes.",
          timestamp: new Date().toLocaleTimeString()
        };
        setTranscription(prev => [...prev, newLine]);
      }, 5000);
      
      return () => clearInterval(timer);
    }
  }, [isLive, transcription]);

  const startSession = () => {
    if (!isLive) {
      setTranscription([]);
      setIsLive(true);
    } else {
      setIsLive(false);
    }
  };

  const handleUpload = (e) => {
    // Handle file upload logic
    console.log("File selected:", e.target.files[0]);
    // Here you would typically upload to S3
  };

  return (
    <div className="flex h-screen bg-gray-50">
   {/* Sidebar */}
 <div className={`bg-white ${isSidebarCollapsed ? 'w-16' : 'w-64'} flex-shrink-0 shadow-lg transition-width duration-300 ease-in-out`}>
          <div className="h-full flex flex-col">
            <div className="p-4 flex justify-between items-center">
              <div className={`font-medium ${isSidebarCollapsed ? 'hidden' : 'block'}`}>
                  <div className={`h-30 w-30 relative ${isSidebarCollapsed ? 'hidden' : 'block'}`}>
                                     <Image 
                                       src="/BlackNoBG.png" 
                                       alt="VoiceBridge Logo" 
                                       layout="fill"
                                       objectFit="contain"
                                     />
                                   </div>
              </div>
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
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-8 py-4">
            <h2 className="text-xl font-semibold text-gray-800">Teacher Dashboard</h2>
            <div className="flex items-center">
              <span className="mr-4 text-sm font-medium text-gray-700">Welcome, Professor</span>
              <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-medium">
                P
              </div>
            </div>
          </div>
        </header>
        
        {/* Dashboard Content */}
        <main className="p-6">
          {/* Start/Stop Session Panel */}
          <div className="mb-6 bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-800">Live Session</h3>
              <button
                onClick={startSession}
                className={`px-4 py-2 rounded-md font-medium ${
                  isLive 
                    ? 'bg-red-600 hover:bg-red-700 text-white' 
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                }`}
              >
                <div className="flex items-center">
                  <MicrophoneIcon className="w-4 h-4 mr-2" />
                  {isLive ? 'End Session' : 'Start Live Session'}
                </div>
              </button>
            </div>
            <div className={`mt-2 ${isLive ? 'text-green-600' : 'text-gray-500'}`}>
              {isLive ? 'Session is live now' : 'No active session'}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Upload Resource Panel */}
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="text-lg font-medium text-gray-800 mb-3">Upload Resources</h3>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <DocumentTextIcon className="w-10 h-10 mx-auto text-gray-400" />
                  <p className="mt-2 text-sm text-gray-600">
                    Drag and drop files here, or click to select files
                  </p>
                  <input
                    type="file"
                    onChange={handleUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <button
                    onClick={() => document.getElementById('file-upload').click()}
                    className="mt-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                  >
                    Upload Files
                  </button>
                  <p className="mt-2 text-xs text-gray-500">
                    Supports PDF, MP3, WAV, MP4
                  </p>
                </div>
              </div>
              
              {/* Live Transcription Viewer */}
              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-medium text-gray-800">Live Transcription</h3>
                  
                  {/* Translation Toggle */}
                  <div className="flex items-center">
                    <label htmlFor="language" className="block text-sm font-medium text-gray-700 mr-2">
                      Translate to:
                    </label>
                    <select
                      id="language"
                      name="language"
                      className="text-sm border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      value={selectedLanguage}
                      onChange={(e) => setSelectedLanguage(e.target.value)}
                    >
                      {languages.map((lang) => (
                        <option key={lang.code} value={lang.code}>
                          {lang.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="h-64 overflow-y-auto border rounded-md p-3 bg-gray-50">
                  {isLive ? (
                    transcription.length > 0 ? (
                      transcription.map((line) => (
                        <div key={line.id} className="mb-2">
                          <span className="text-xs text-gray-500">{line.timestamp}: </span>
                          <span>{line.text}</span>
                        </div>
                      ))
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-500">
                        Start speaking to see transcription...
                      </div>
                    )
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-500">
                      Start a live session to enable transcription
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="space-y-6">
              {/* Connected Students */}
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="text-lg font-medium text-gray-800 mb-3">
                  <div className="flex items-center">
                    <UserGroupIcon className="w-5 h-5 mr-1 text-indigo-600" />
                    Connected Students
                  </div>
                </h3>
                <div className="space-y-2">
                  {connectedStudents.map((student) => (
                    <div key={student.id} className="flex items-center justify-between p-2 border-b">
                      <div className="flex items-center">
                        <div className={`w-2 h-2 rounded-full mr-2 ${student.online ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                        <span className="text-sm">{student.name}</span>
                      </div>
                      {student.feedback && (
                        <span className="text-lg">{student.feedback}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Analytics Overview */}
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="text-lg font-medium text-gray-800 mb-3">
                  <div className="flex items-center">
                    <ChartBarIcon className="w-5 h-5 mr-1 text-indigo-600" />
                    Live Analytics
                  </div>
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Speaking Time</span>
                    <span className="font-medium">{stats.speakingTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Questions Asked</span>
                    <span className="font-medium">{stats.questionsAsked}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Student Interactions</span>
                    <span className="font-medium">{stats.studentInteractions}</span>
                  </div>
                </div>
              </div>
              
              {/* Real-Time Q&A Panel */}
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="text-lg font-medium text-gray-800 mb-3">
                  <div className="flex items-center">
                    <ChatBubbleLeftRightIcon className="w-5 h-5 mr-1 text-indigo-600" />
                    Student Questions
                  </div>
                </h3>
                <div className="space-y-3">
                  {questions.length > 0 ? (
                    questions.map((q) => (
                      <div key={q.id} className="border rounded-md p-3 bg-gray-50">
                        <div className="flex justify-between text-xs text-gray-500 mb-1">
                          <span>{q.student}</span>
                          <span>{q.time}</span>
                        </div>
                        <p className="text-sm">{q.question}</p>
                        <div className="mt-2 text-right">
                          <button className="inline-flex items-center px-2 py-1 text-xs font-medium rounded text-indigo-600 hover:bg-indigo-50">
                            <PaperAirplaneIcon className="w-3 h-3 mr-1" />
                            Respond
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center text-gray-500 py-4">
                      No questions yet
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}