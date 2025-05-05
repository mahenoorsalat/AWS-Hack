"use client"

// pages/history.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import { 
  Search, User, Calendar, Download, FileText, 
  Globe, FileSpreadsheet, Eye, ChevronRight, 
  ChevronLeft, Trash2, Home, MessageSquare, Settings
} from 'lucide-react';

export default function History() {
  // State for sessions data
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const [sessions, setSessions] = useState([]);
  const [filteredSessions, setFilteredSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [languageFilter, setLanguageFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSession, setSelectedSession] = useState(null);
  const [isDetailView, setIsDetailView] = useState(false);
  
  const itemsPerPage = 5;

  const SignLanguage = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="currentColor"
      viewBox="0 0 640 512"
    >
      <path d="M272 320H112l-25.1-50.2c-5.9-11.8-20.3-16.5-32.1-10.6S38.3 279.5 44.2 291.3l32 64c5.4 10.8 16.3 17.7 28.2 17.7H272c13.3 0 24-10.7 24-24s-10.7-24-24-24zm352.8 36.7L563.2 256l61.6-100.7c6.9-11.3 3.4-26.1-7.9-33s-26.1-3.4-33 7.9L512 232.8V128c0-13.3-10.7-24-24-24s-24 10.7-24 24v104.8L452.1 171c-6.9-11.3-21.7-14.8-33-7.9s-14.8 21.7-7.9 33L472.8 256l-61.6 100.7c-6.9 11.3-3.4 26.1 7.9 33s26.1 3.4 33-7.9L488 279.2V384c0 13.3 10.7 24 24 24s24-10.7 24-24V279.2l36.8 60.6c6.9 11.3 21.7 14.8 33 7.9s14.8-21.7 7.9-33z"/>
    </svg>
  );
  
  // Mock data for demonstration
  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      const mockSessions = [
        {
          id: 1,
          title: "Math Class - Algebra Introduction",
          date: "June 5, 2025",
          time: "10:30 AM",
          hasTranscript: true,
          hasTranslation: true,
          translationLanguage: "Spanish",
          hasSignLanguage: true,
          hasSummary: true,
          transcript: "Today we covered the basics of algebra including variables, constants, and simple equations...",
          translation: "Hoy cubrimos los conceptos básicos del álgebra, incluyendo variables, constantes y ecuaciones simples...",
          summary: "This session introduced algebraic concepts, focusing on variables, constants, and solving basic equations. Students learned how to manipulate expressions and understand the core principles of algebra.",
          recordingUrl: "/mock-recording.mp3"
        },
        {
          id: 2,
          title: "Biology Lecture - Photosynthesis",
          date: "June 3, 2025",
          time: "1:45 PM",
          hasTranscript: true,
          hasTranslation: false,
          translationLanguage: "",
          hasSignLanguage: false,
          hasSummary: true,
          transcript: "Photosynthesis is the process used by plants to convert light energy into chemical energy...",
          translation: "",
          summary: "This lecture explained the photosynthesis process in detail, covering light-dependent and light-independent reactions.",
          recordingUrl: "/mock-recording.mp3"
        },
        {
          id: 3,
          title: "History Seminar - Ancient Rome",
          date: "May 29, 2025",
          time: "3:15 PM",
          hasTranscript: true,
          hasTranslation: true,
          translationLanguage: "French",
          hasSignLanguage: true,
          hasSummary: true,
          transcript: "Today's seminar explored the rise and fall of the Roman Empire, focusing on key political structures...",
          translation: "Le séminaire d'aujourd'hui a exploré la montée et la chute de l'Empire romain, en se concentrant sur les structures politiques clés...",
          summary: "This seminar covered the political and social structures of Ancient Rome, with emphasis on the Republic and Empire periods.",
          recordingUrl: "/mock-recording.mp3"
        },
        {
          id: 4,
          title: "Physics Lab - Forces and Motion",
          date: "May 25, 2025",
          time: "9:00 AM",
          hasTranscript: true,
          hasTranslation: false,
          translationLanguage: "",
          hasSignLanguage: false,
          hasSummary: true,
          transcript: "In today's lab, we measured and analyzed different forces and their effects on object motion...",
          translation: "",
          summary: "Students conducted experiments to observe Newton's laws of motion in action and collected data on force and acceleration relationships.",
          recordingUrl: "/mock-recording.mp3"
        },
        {
          id: 5,
          title: "English Literature - Shakespeare",
          date: "May 20, 2025",
          time: "2:00 PM",
          hasTranscript: true,
          hasTranslation: true,
          translationLanguage: "Mandarin",
          hasSignLanguage: true,
          hasSummary: true,
          transcript: "Our discussion today focused on Shakespeare's use of metaphor and symbolism in Macbeth...",
          translation: "今天的讨论集中在莎士比亚在《麦克白》中使用的隐喻和象征主义...",
          summary: "This class analyzed the literary devices in Macbeth, with special emphasis on the themes of ambition and guilt.",
          recordingUrl: "/mock-recording.mp3"
        },
        {
          id: 6,
          title: "Chemistry Workshop - Periodic Table",
          date: "May 18, 2025",
          time: "11:15 AM",
          hasTranscript: true,
          hasTranslation: false,
          translationLanguage: "",
          hasSignLanguage: false,
          hasSummary: true,
          transcript: "Today we explored the organization of the periodic table and the properties of elements...",
          translation: "",
          summary: "This workshop covered the structure of the periodic table, element properties, and trends across periods and groups.",
          recordingUrl: "/mock-recording.mp3"
        },
        {
          id: 7,
          title: "Computer Science - Data Structures",
          date: "May 15, 2025",
          time: "4:30 PM",
          hasTranscript: true,
          hasTranslation: true,
          translationLanguage: "Korean",
          hasSignLanguage: true,
          hasSummary: true,
          transcript: "In this lecture, we covered linked lists, arrays, stacks, and queues as fundamental data structures...",
          translation: "이 강의에서는 연결 리스트, 배열, 스택 및 큐와 같은 기본 데이터 구조를 다루었습니다...",
          summary: "This session introduced fundamental data structures, their implementations, and their applications in software development.",
          recordingUrl: "/mock-recording.mp3"
        }
      ];
      
      setSessions(mockSessions);
      setFilteredSessions(mockSessions);
      setLoading(false);
    }, 1000);
  }, []);

  // Filter sessions based on search and filters
  useEffect(() => {
    let results = sessions;
    
    if (searchTerm) {
      results = results.filter(session => 
        session.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        session.date.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (dateFilter) {
      results = results.filter(session => 
        session.date.includes(dateFilter)
      );
    }
    
    if (languageFilter) {
      results = results.filter(session => 
        session.translationLanguage === languageFilter
      );
    }
    
    if (typeFilter === 'transcript') {
      results = results.filter(session => session.hasTranscript);
    } else if (typeFilter === 'translation') {
      results = results.filter(session => session.hasTranslation);
    } else if (typeFilter === 'signLanguage') {
      results = results.filter(session => session.hasSignLanguage);
    } else if (typeFilter === 'summary') {
      results = results.filter(session => session.hasSummary);
    }
    
    setFilteredSessions(results);
    setCurrentPage(1); // Reset to first page when filtering
  }, [searchTerm, dateFilter, languageFilter, typeFilter, sessions]);

  // Get current page items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredSessions.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredSessions.length / itemsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm('');
    setDateFilter('');
    setLanguageFilter('');
    setTypeFilter('');
  };
  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };
  // Handle view details
  const handleViewDetails = (session) => {
    setSelectedSession(session);
    setIsDetailView(true);
  };

  // Back to list view
  const backToList = () => {
    setIsDetailView(false);
    setSelectedSession(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
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

      <div className="flex">
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

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {!isDetailView ? (
              <>
                {/* Search & Filters */}
                <div className="bg-white shadow rounded-lg p-6 mb-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        placeholder="Search by title or date"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <select
                        className="block w-full md:w-auto border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 py-2 px-3"
                        value={dateFilter}
                        onChange={(e) => setDateFilter(e.target.value)}
                      >
                        <option value="">Filter by Date</option>
                        <option value="May">May 2025</option>
                        <option value="June">June 2025</option>
                      </select>
                      <select
                        className="block w-full md:w-auto border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 py-2 px-3"
                        value={languageFilter}
                        onChange={(e) => setLanguageFilter(e.target.value)}
                      >
                        <option value="">Filter by Language</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        <option value="Mandarin">Mandarin</option>
                        <option value="Korean">Korean</option>
                      </select>
                      <select
                        className="block w-full md:w-auto border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 py-2 px-3"
                        value={typeFilter}
                        onChange={(e) => setTypeFilter(e.target.value)}
                      >
                        <option value="">Filter by Type</option>
                        <option value="transcript">Transcript</option>
                        <option value="translation">Translation</option>
                        <option value="signLanguage">Sign Language</option>
                        <option value="summary">Summary</option>
                      </select>
                      <button
                        onClick={clearFilters}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Clear Filters
                      </button>
                    </div>
                  </div>
                </div>

                {/* Session List */}
                <div className="bg-white shadow rounded-lg p-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-6">Past Sessions</h2>
                  
                  {loading ? (
                    <div className="flex justify-center items-center py-12">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
                    </div>
                  ) : 
                  (
                    <div className="space-y-6">
                      {currentItems.map((session) => (
                        <div 
                          key={session.id} 
                          className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                        >
                          <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                            <div>
                              <h3 className="text-lg font-medium text-gray-900">{session.title}</h3>
                              <p className="text-sm text-gray-500 mt-1">{session.date} • {session.time}</p>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                              {session.hasTranscript && (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                  <FileText className="h-3.5 w-3.5 mr-1" /> Transcript
                                </span>
                              )}
                              {session.hasTranslation && (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  <Globe className="h-3.5 w-3.5 mr-1" /> {session.translationLanguage}
                                </span>
                              )}
                              {session.hasSummary && (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                  <FileSpreadsheet className="h-3.5 w-3.5 mr-1" /> Summary
                                </span>
                              )}
                              {session.hasSignLanguage && (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                  <SignLanguage className="h-3.5 w-3.5 mr-1" /> Sign Language
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-4">
                            <button
                              onClick={() => handleViewDetails(session)}
                              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              <Eye className="h-4 w-4 mr-1" /> View Details
                            </button>
                            {session.hasTranscript && (
                              <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <Download className="h-4 w-4 mr-1" /> Download Transcript
                              </button>
                            )}
                            {session.hasTranslation && (
                              <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <Globe className="h-4 w-4 mr-1" /> View Translation
                              </button>
                            )}
                            {session.hasSignLanguage && (
                              <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <SignLanguage className="h-4 w-4 mr-1" /> View Sign Language
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Pagination */}
                  {!loading && filteredSessions.length > 0 && (
                    <div className="flex justify-between items-center mt-6">
                      <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{" "}
                        <span className="font-medium">
                          {Math.min(indexOfLastItem, filteredSessions.length)}
                        </span>{" "}
                        of <span className="font-medium">{filteredSessions.length}</span> sessions
                      </p>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => paginate(currentPage - 1)}
                          disabled={currentPage === 1}
                          className={`inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md ${
                            currentPage === 1
                              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                              : "bg-white text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          <ChevronLeft className="h-4 w-4" />
                          Previous
                        </button>
                        <button
                          onClick={() => paginate(currentPage + 1)}
                          disabled={currentPage === totalPages}
                          className={`inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md ${
                            currentPage === totalPages
                              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                              : "bg-white text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          Next
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              // Detailed Session View
              <div className="bg-white shadow rounded-lg p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <button
                      onClick={backToList}
                      className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800 mb-2"
                    >
                      <ChevronLeft className="h-4 w-4 mr-1" /> Back to History
                    </button>
                    <h2 className="text-xl font-medium text-gray-900">{selectedSession.title}</h2>
                    <p className="text-sm text-gray-500 mt-1">{selectedSession.date} • {selectedSession.time}</p>
                  </div>
                  <div className="flex space-x-2">
                    {selectedSession.hasTranscript && (
                      <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <Download className="h-4 w-4 mr-1" /> Download Transcript
                      </button>
                    )}
                    <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                      <Trash2 className="h-4 w-4 mr-1" /> Delete Session
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Transcription */}
                  {selectedSession.hasTranscript && (
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Transcription</h3>
                      <div className="bg-gray-50 p-4 rounded-md max-h-64 overflow-y-auto">
                        <p className="text-gray-700 whitespace-pre-line">{selectedSession.transcript}</p>
                      </div>
                    </div>
                  )}

                  {/* Translation */}
                  {selectedSession.hasTranslation && (
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Translation ({selectedSession.translationLanguage})
                      </h3>
                      <div className="bg-gray-50 p-4 rounded-md max-h-64 overflow-y-auto">
                        <p className="text-gray-700 whitespace-pre-line">{selectedSession.translation}</p>
                      </div>
                    </div>
                  )}

                  {/* Summary */}
                  {selectedSession.hasSummary && (
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Summary</h3>
                      <div className="bg-gray-50 p-4 rounded-md max-h-64 overflow-y-auto">
                        <p className="text-gray-700 whitespace-pre-line">{selectedSession.summary}</p>
                      </div>
                    </div>
                  )}

                  {/* Sign Language (placeholder) */}
                  {selectedSession.hasSignLanguage && (
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Sign Language</h3>
                      <div className="bg-gray-50 p-4 rounded-md text-center">
                        <div className="bg-black rounded-md h-48 flex items-center justify-center">
                          <p className="text-white">Sign Language Video Player</p>
                        </div>
                        <div className="mt-2 flex justify-center space-x-2">
                          <button className="px-3 py-1 bg-gray-200 rounded-md text-sm">Play</button>
                          <button className="px-3 py-1 bg-gray-200 rounded-md text-sm">Pause</button>
                          <button className="px-3 py-1 bg-gray-200 rounded-md text-sm">Replay</button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Audio Playback */}
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Recording</h3>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <div className="bg-gray-100 rounded-md p-2">
                        <div className="flex items-center justify-between">
                          <button className="p-2 rounded-full bg-indigo-600 text-white">
                            <Play className="h-4 w-4" />
                          </button>
                          <div className="flex-1 mx-3">
                            <div className="h-2 bg-gray-300 rounded-full">
                              <div className="h-2 bg-indigo-600 rounded-full w-1/3"></div>
                            </div>
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                              <span>0:00</span>
                              <span>2:45</span>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Volume2 className="h-4 w-4 text-gray-600" />
                            <div className="ml-2 w-16 h-1.5 bg-gray-300 rounded-full">
                              <div className="h-1.5 bg-gray-600 rounded-full w-3/4"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </main>

          {/* Footer */}
          <footer className="bg-white border-t border-gray-200 mt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">© 2025 VoiceBridge, powered by AWS</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Built for Breaking Barriers Challenge</p>
                </div>
                <div>
                  <a 
                    href="https://github.com/voicebridge" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-indigo-600 hover:text-indigo-800"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )}