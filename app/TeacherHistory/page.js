"use client"

// teacher/history.jsx
import { useState, useEffect } from 'react';
import { 
  CalendarIcon, 
  MagnifyingGlassIcon, 
  DocumentTextIcon,
  CloudArrowDownIcon,
  
  HandRaisedIcon
} from '@heroicons/react/24/outline';
import Image from 'next/image';

// Sample data to simulate API response
const sampleSessions = [
  {
    id: "session123",
    topic: "Introduction to Algebra",
    date: "2025-05-01T09:00:00Z",
    duration: "45 minutes",
    language: "English",
    studentCount: 32,
    transcriptUrl: "/transcripts/session123.pdf",
    summaryText: "This class covered algebra basics including variables, coefficients, and simple equations. Students showed strong engagement with the concept of variables representing unknown quantities. Several good questions about practical applications were raised. Recommended follow-up: More examples of word problems that translate to algebraic expressions.",
    hasAvatar: true
  },
  {
    id: "session124",
    topic: "Advanced Geometry: Triangles",
    date: "2025-04-28T10:30:00Z",
    duration: "50 minutes",
    language: "English",
    studentCount: 28,
    transcriptUrl: "/transcripts/session124.pdf",
    summaryText: "Session focused on properties of triangles, covering the Pythagorean theorem and trigonometric ratios. Several students struggled with applying trigonometric concepts. Consider reviewing basic trigonometric functions in the next session.",
    hasAvatar: true
  },
  {
    id: "session125",
    topic: "Spanish Conversation Practice",
    date: "2025-04-25T13:15:00Z",
    duration: "60 minutes",
    language: "Spanish",
    studentCount: 24,
    transcriptUrl: "/transcripts/session125.pdf",
    summaryText: "Students practiced conversational Spanish using present and past tenses. Most students showed improvement in verb conjugation but continue to struggle with irregular verbs. Pronunciation of 'r' sounds remains challenging for about 30% of the class.",
    hasAvatar: false
  },
  {
    id: "session126",
    topic: "History: Industrial Revolution",
    date: "2025-04-22T09:00:00Z",
    duration: "55 minutes",
    language: "English",
    studentCount: 30,
    transcriptUrl: "/transcripts/session126.pdf",
    summaryText: "Lecture covered the key technological innovations of the Industrial Revolution and their social impacts. Students were particularly engaged with discussions about child labor and working conditions. Many good questions about how the period connects to modern technological changes.",
    hasAvatar: false
  }
];

export default function TeacherHistory() {
        const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
    
  const [sessions, setSessions] = useState([]);
  const [filteredSessions, setFilteredSessions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [language, setLanguage] = useState('All');
  const [dateRange, setDateRange] = useState({
    start: null,
    end: null
  });
  const [showSummary, setShowSummary] = useState(false);
  const [summaryText, setSummaryText] = useState("");
  const [summaryTitle, setSummaryTitle] = useState("");
  const [avatarReplayOpen, setAvatarReplayOpen] = useState(false);
  const [currentSessionId, setCurrentSessionId] = useState(null);
    const [activeTab, setActiveTab] = useState('dashboard');
  

  // Languages available for filtering
  const languages = ["All", "English", "Spanish", "French", "Hindi", "Chinese"];
  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };
  // Fetch sessions (simulated API call)
  useEffect(() => {
    // In a real app, this would be an API call
    const fetchSessions = async () => {
      // Simulate API delay
      setTimeout(() => {
        setSessions(sampleSessions);
        setFilteredSessions(sampleSessions);
      }, 500);
    };
    
    fetchSessions();
  }, []);

  // Handle search and filters
  useEffect(() => {
    let results = [...sessions];
    
    // Apply search term filter
    if (searchTerm) {
      results = results.filter(session => 
        session.topic.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply language filter
    if (language !== 'All') {
      results = results.filter(session => session.language === language);
    }
    
    // Apply date filter (if implemented)
    // This would filter based on dateRange.start and dateRange.end
    
    setFilteredSessions(results);
  }, [searchTerm, language, dateRange, sessions]);

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  // Open summary modal
  const openSummary = (sessionId) => {
    const session = sessions.find(s => s.id === sessionId);
    if (session) {
      setSummaryText(session.summaryText);
      setSummaryTitle(session.topic);
      setShowSummary(true);
    }
  };

  // Close summary modal
  const closeSummary = () => {
    setShowSummary(false);
  };

  // Open avatar replay
  const openAvatarReplay = (sessionId) => {
    setCurrentSessionId(sessionId);
    setAvatarReplayOpen(true);
  };

  // Close avatar replay
  const closeReplay = () => {
    setAvatarReplayOpen(false);
  };

  // View transcript (would typically open in new tab or download)
  const openTranscript = (sessionId) => {
    console.log(`Opening transcript for session ${sessionId}`);
    // In a real app, this might navigate to a transcript view or open a PDF
  };

  // Download session as PDF
  const downloadPDF = (sessionId) => {
    console.log(`Downloading PDF for session ${sessionId}`);
    // In a real app, this would trigger a download
  };

  return (
    <div className="flex overflow-auto bg-gray-50">


      {/* Sidebar */}
      <div className="flex  overflow-hidden">
  
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
              <a href="#" className={`flex items-center py-3 px-4 text-gray-700 hover:bg-gray-100`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className={`ml-3 ${isSidebarCollapsed ? 'hidden' : 'block'}`}>Dashboard</span>
              </a>
            
              <a href="#" className={`flex items-center py-3 px-4 bg-indigo-100 text-indigo-700`}>
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
        </div>

        <main className=" overflow-y-auto">

              {/* Page Header */}
      <header className="bg-white shadow-sm">
        <div className="px-8 py-4">
          <h2 className="text-xl font-semibold text-gray-800">Session History</h2>
          <p className="text-sm text-gray-600">Your previous class sessions with transcription & analytics</p>
        </div>
      </header>
        {/* Filter & Search Controls */}
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Date Range Picker (simplified) */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <CalendarIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Select date range"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Language Filter */}
            <div className="md:w-64">
              <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Input */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search by session name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sessions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSessions.length > 0 ? (
            filteredSessions.map((session) => (
              <div 
                key={session.id} 
                className="bg-white shadow-md rounded-xl p-4 transition hover:shadow-lg"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-gray-800">{session.topic}</h3>
                  <span className="text-sm text-gray-500">{formatDate(session.date)}</span>
                </div>

                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Language:</span> {session.language}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Duration:</span> {session.duration}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Students:</span> {session.studentCount}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => openTranscript(session.id)}
                    className="flex items-center justify-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <DocumentTextIcon className="h-4 w-4 mr-1 text-indigo-600" />
                    View Transcript
                  </button>

                  <button
                    onClick={() => openSummary(session.id)}
                    className="flex items-center justify-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <h2 className="h-4 w-4 mr-1 text-indigo-600" />
                    AI Summary
                  </button>

                  <button
                    onClick={() => downloadPDF(session.id)}
                    className="flex items-center justify-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <CloudArrowDownIcon className="h-4 w-4 mr-1 text-indigo-600" />
                    Download
                  </button>

                  {session.hasAvatar && (
                    <button
                      onClick={() => openAvatarReplay(session.id)}
                      className="flex items-center justify-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      <HandRaisedIcon className="h-4 w-4 mr-1 text-indigo-600" />
                      Replay Avatar
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-10">
              <p className="text-gray-500">No sessions found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>

      {/* AI Summary Modal */}
      {showSummary && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 overflow-hidden">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-800">AI Summary: {summaryTitle}</h2>
              <button
                onClick={closeSummary}
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
            <div className="p-6">
              <p className="text-gray-700 whitespace-pre-line">{summaryText}</p>
            </div>
            <div className="bg-gray-50 px-4 py-3 flex justify-end">
              <button
                onClick={closeSummary}
                className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Avatar Replay Modal */}
      {avatarReplayOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 overflow-hidden">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-800">Sign Language Avatar Replay</h2>
              <button
                onClick={closeReplay}
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
            <div className="p-6">
              <div className="bg-gray-100 w-full h-96 flex items-center justify-center rounded-md">
                {/* In a real app, this would be an iframe or canvas element */}
                <div className="text-center">
                  <HandRaisedIcon className="h-16 w-16 mx-auto text-indigo-600" />
                  <p className="mt-4 text-gray-600">Sign language avatar would play here</p>
                  <p className="text-sm text-gray-500">Session ID: {currentSessionId}</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 flex justify-end">
              <button
                onClick={closeReplay}
                className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}