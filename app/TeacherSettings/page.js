"use client"

// teacher/settings.jsx
import { useState } from 'react';
import { 
  CameraIcon,
  SunIcon,
  MoonIcon,
  CheckIcon,
  XMarkIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function TeacherSettings() {
            const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
    
              // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };
  // User profile state
  const [profile, setProfile] = useState({
    name: "Dr. Sarah Johnson",
    email: "sarah.johnson@university.edu",
    phone: "+1 (555) 123-4567",
    institution: "State University",
    bio: "Professor of Mathematics with 15 years of experience. Specializing in making complex concepts accessible to students of all learning styles."
  });

  // Settings state
  const [settings, setSettings] = useState({
    // Language & Preferences
    preferredLanguage: "English",
    captionDisplay: true,
    fontSize: 3, // Scale of 1-5
    avatarTheme: "Professional",
    
    // AI Configuration
    translationLanguage: "Hindi",
    enableAISummary: true,
    aiAssistantMode: "Explain Like I'm 5",
    
    // Accessibility Settings
    colorMode: "light",
    highContrast: false,
    simplifiedUI: false,
    keyboardNavigation: true,
    
    // Session Behavior
    autoRecord: true,
    allowStudentQuestions: true,
    sessionTimeLimit: "60"
  });

  // Handle profile update
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value
    });
  };

  // Handle settings change
  const handleSettingsChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Handle form submission
  const handleSaveSettings = (e) => {
    e.preventDefault();
    // In a real app, this would send the data to an API
    console.log("Profile:", profile);
    console.log("Settings:", settings);
    // Show success feedback
    alert("Settings saved successfully!");
  };

  // Reset settings to defaults
  const handleResetSettings = () => {
    // This would reset to system defaults
    if (confirm("Are you sure you want to reset all settings to defaults?")) {
      // Reset logic would go here
      alert("Settings have been reset to defaults.");
    }
  };

  // Languages available for selection
  const languages = ["English", "Spanish", "French", "Hindi", "Bengali", "Chinese", "Arabic", "Russian"];
  
  // Avatar themes
  const avatarThemes = ["Professional", "Casual", "Animated", "Minimalist", "Colorful"];
  
  // AI Assistant modes
  const aiModes = ["Short Answer", "Explain Like I'm 5", "Detailed Academic", "Summarize", "Question Generator"];
  
  // Session time limits
  const timeLimits = ["15", "30", "45", "60", "90", "120"];

  return (
    <div className="flex overflow-auto bg-gray-50">
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


      <main className="p-6">
              {/* Page Header */}
      <header className="bg-white shadow-sm">
        <div className="px-8 py-4">
          <h2 className="text-xl font-semibold text-gray-800">Settings</h2>
          <p className="text-sm text-gray-600">Customize your teaching environment and preferences</p>
        </div>
      </header>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Section - Left Column */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Welcome, {profile.name}</h3>
              
              {/* Profile Picture */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-indigo-100 flex items-center justify-center overflow-hidden border-4 border-white shadow">
                    <span className="text-4xl font-semibold text-indigo-600">{profile.name.charAt(0)}</span>
                  </div>
                  <button className="absolute bottom-0 right-0 bg-indigo-600 text-white p-2 rounded-full shadow hover:bg-indigo-700">
                    <CameraIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {/* Profile Form */}
              <form>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={profile.name}
                      onChange={handleProfileChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={profile.email}
                      readOnly
                      className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <p className="mt-1 text-xs text-gray-500">Contact admin to change email</p>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={profile.phone}
                      onChange={handleProfileChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="institution" className="block text-sm font-medium text-gray-700">Institution / Organization</label>
                    <input
                      type="text"
                      id="institution"
                      name="institution"
                      value={profile.institution}
                      onChange={handleProfileChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
                    <textarea
                      id="bio"
                      name="bio"
                      rows={3}
                      value={profile.bio}
                      onChange={handleProfileChange}
                      placeholder="Tell students about yourself in 1–2 lines"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <p className="mt-1 text-xs text-gray-500">This will be visible to your students</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={handleSaveSettings}
                    className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save Profile
                  </button>
                </div>
                
                <div className="mt-6 space-y-4 border-t pt-4">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Change Password
                  </button>
                  
                  <button
                    type="button"
                    className="w-full inline-flex justify-center py-2 px-4 border border-red-300 shadow-sm text-sm font-medium rounded-md text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Delete Account
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Settings Panel - Right Column */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex">
                  <button className="border-indigo-500 text-indigo-600 whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm">
                    All Settings
                  </button>
                </nav>
              </div>
              
              <div className="p-6">
                <form onSubmit={handleSaveSettings}>
                  {/* Language & Preferences */}
                  <div className="mb-8">
                    <h4 className="text-lg font-medium text-gray-900 mb-4">Language & Preferences</h4>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="preferredLanguage" className="block text-sm font-medium text-gray-700">
                          Preferred Language
                        </label>
                        <select
                          id="preferredLanguage"
                          name="preferredLanguage"
                          value={settings.preferredLanguage}
                          onChange={handleSettingsChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        >
                          {languages.map(lang => (
                            <option key={lang} value={lang}>{lang}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <label htmlFor="captionDisplay" className="block text-sm font-medium text-gray-700">
                          Caption Display
                        </label>
                        <div className="relative inline-block w-10 mr-2 align-middle">
                          <input
                            type="checkbox"
                            id="captionDisplay"
                            name="captionDisplay"
                            checked={settings.captionDisplay}
                            onChange={handleSettingsChange}
                            className="sr-only"
                          />
                          <div className="w-10 h-5 bg-gray-200 rounded-full shadow-inner"></div>
                          <div className={`toggle-dot absolute w-5 h-5 rounded-full shadow inset-y-0 left-0 ${settings.captionDisplay ? 'transform translate-x-full bg-indigo-600' : 'bg-white'} transition`}></div>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="fontSize" className="block text-sm font-medium text-gray-700">
                          Font Size for Students: {['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large'][settings.fontSize - 1]}
                        </label>
                        <input
                          type="range"
                          id="fontSize"
                          name="fontSize"
                          min="1"
                          max="5"
                          value={settings.fontSize}
                          onChange={handleSettingsChange}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="avatarTheme" className="block text-sm font-medium text-gray-700">
                          Avatar Display
                        </label>
                        <select
                          id="avatarTheme"
                          name="avatarTheme"
                          value={settings.avatarTheme}
                          onChange={handleSettingsChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        >
                          {avatarThemes.map(theme => (
                            <option key={theme} value={theme}>{theme}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  {/* AI Configuration */}
                  <div className="mb-8">
                    <h4 className="text-lg font-medium text-gray-900 mb-4">AI Configuration</h4>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="translationLanguage" className="block text-sm font-medium text-gray-700">
                          Default Translation Language
                        </label>
                        <select
                          id="translationLanguage"
                          name="translationLanguage"
                          value={settings.translationLanguage}
                          onChange={handleSettingsChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        >
                          {languages.map(lang => (
                            <option key={lang} value={lang}>{lang}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <label htmlFor="enableAISummary" className="block text-sm font-medium text-gray-700">
                          Enable AI Summary Generation
                        </label>
                        <div className="relative inline-block w-10 mr-2 align-middle">
                          <input
                            type="checkbox"
                            id="enableAISummary"
                            name="enableAISummary"
                            checked={settings.enableAISummary}
                            onChange={handleSettingsChange}
                            className="sr-only"
                          />
                          <div className="w-10 h-5 bg-gray-200 rounded-full shadow-inner"></div>
                          <div className={`toggle-dot absolute w-5 h-5 rounded-full shadow inset-y-0 left-0 ${settings.enableAISummary ? 'transform translate-x-full bg-indigo-600' : 'bg-white'} transition`}></div>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="aiAssistantMode" className="block text-sm font-medium text-gray-700">
                          Default AI Assistant Mode
                        </label>
                        <select
                          id="aiAssistantMode"
                          name="aiAssistantMode"
                          value={settings.aiAssistantMode}
                          onChange={handleSettingsChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        >
                          {aiModes.map(mode => (
                            <option key={mode} value={mode}>{mode}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  {/* Accessibility Settings */}
                  <div className="mb-8">
                    <h4 className="text-lg font-medium text-gray-900 mb-4">Accessibility Settings</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <label className="block text-sm font-medium text-gray-700">
                          Color Mode
                        </label>
                        <div className="flex items-center">
                          <button
                            type="button"
                            className={`p-2 rounded-l-md ${settings.colorMode === 'light' ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-500'}`}
                            onClick={() => setSettings({...settings, colorMode: 'light'})}
                          >
                            <SunIcon className="w-5 h-5" />
                          </button>
                          <button
                            type="button"
                            className={`p-2 rounded-r-md ${settings.colorMode === 'dark' ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-500'}`}
                            onClick={() => setSettings({...settings, colorMode: 'dark'})}
                          >
                            <MoonIcon className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <label htmlFor="highContrast" className="block text-sm font-medium text-gray-700">
                          Enable High Contrast
                        </label>
                        <div className="relative inline-block w-10 mr-2 align-middle">
                          <input
                            type="checkbox"
                            id="highContrast"
                            name="highContrast"
                            checked={settings.highContrast}
                            onChange={handleSettingsChange}
                            className="sr-only"
                          />
                          <div className="w-10 h-5 bg-gray-200 rounded-full shadow-inner"></div>
                          <div className={`toggle-dot absolute w-5 h-5 rounded-full shadow inset-y-0 left-0 ${settings.highContrast ? 'transform translate-x-full bg-indigo-600' : 'bg-white'} transition`}></div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <label htmlFor="simplifiedUI" className="block text-sm font-medium text-gray-700">
                          Use Simplified UI
                        </label>
                        <div className="relative inline-block w-10 mr-2 align-middle">
                          <input
                            type="checkbox"
                            id="simplifiedUI"
                            name="simplifiedUI"
                            checked={settings.simplifiedUI}
                            onChange={handleSettingsChange}
                            className="sr-only"
                          />
                          <div className="w-10 h-5 bg-gray-200 rounded-full shadow-inner"></div>
                          <div className={`toggle-dot absolute w-5 h-5 rounded-full shadow inset-y-0 left-0 ${settings.simplifiedUI ? 'transform translate-x-full bg-indigo-600' : 'bg-white'} transition`}></div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <label htmlFor="keyboardNavigation" className="block text-sm font-medium text-gray-700">
                          Enable Keyboard Navigation
                        </label>
                        <div className="relative inline-block w-10 mr-2 align-middle">
                          <input
                            type="checkbox"
                            id="keyboardNavigation"
                            name="keyboardNavigation"
                            checked={settings.keyboardNavigation}
                            onChange={handleSettingsChange}
                            className="sr-only"
                          />
                          <div className="w-10 h-5 bg-gray-200 rounded-full shadow-inner"></div>
                          <div className={`toggle-dot absolute w-5 h-5 rounded-full shadow inset-y-0 left-0 ${settings.keyboardNavigation ? 'transform translate-x-full bg-indigo-600' : 'bg-white'} transition`}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Session Behavior */}
                  <div className="mb-8">
                    <h4 className="text-lg font-medium text-gray-900 mb-4">Session Behavior</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <label htmlFor="autoRecord" className="block text-sm font-medium text-gray-700">
                          Auto-record Sessions
                        </label>
                        <div className="relative inline-block w-10 mr-2 align-middle">
                          <input
                            type="checkbox"
                            id="autoRecord"
                            name="autoRecord"
                            checked={settings.autoRecord}
                            onChange={handleSettingsChange}
                            className="sr-only"
                          />
                          <div className="w-10 h-5 bg-gray-200 rounded-full shadow-inner"></div>
                          <div className={`toggle-dot absolute w-5 h-5 rounded-full shadow inset-y-0 left-0 ${settings.autoRecord ? 'transform translate-x-full bg-indigo-600' : 'bg-white'} transition`}></div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <label htmlFor="allowStudentQuestions" className="block text-sm font-medium text-gray-700">
                          Allow Student Questions
                        </label>
                        <div className="relative inline-block w-10 mr-2 align-middle">
                          <input
                            type="checkbox"
                            id="allowStudentQuestions"
                            name="allowStudentQuestions"
                            checked={settings.allowStudentQuestions}
                            onChange={handleSettingsChange}
                            className="sr-only"
                          />
                          <div className="w-10 h-5 bg-gray-200 rounded-full shadow-inner"></div>
                          <div className={`toggle-dot absolute w-5 h-5 rounded-full shadow inset-y-0 left-0 ${settings.allowStudentQuestions ? 'transform translate-x-full bg-indigo-600' : 'bg-white'} transition`}></div>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="sessionTimeLimit" className="block text-sm font-medium text-gray-700">
                          Session Time Limit (minutes)
                        </label>
                        <select
                          id="sessionTimeLimit"
                          name="sessionTimeLimit"
                          value={settings.sessionTimeLimit}
                          onChange={handleSettingsChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        >
                          {timeLimits.map(time => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  {/* Save & Reset Buttons */}
                  <div className="flex items-center justify-between pt-5 border-t border-gray-200">
                    <button
                      type="button"
                      onClick={handleResetSettings}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <ArrowPathIcon className="w-4 h-4 mr-2" />
                      Reset to Defaults
                    </button>
                    
                    <button
                      type="submit"
                      className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <CheckIcon className="w-4 h-4 mr-2" />
                      Save All Settings
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-10 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 text-sm mb-4 md:mb-0">
              © 2025 EduSpeak. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-indigo-600 text-sm">Help Center</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 text-sm">Contact Support</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 text-sm">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}