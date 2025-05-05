// pages/index.js
"use client"
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

// Dummy translation animation component
const TranslationAnimation = () => {
  return (
    <div className="flex items-center justify-center space-x-4 my-8">
      <div className="w-16 h-16 bg-indigo-600 rounded-full animate-pulse flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      </div>
      <div className="w-20 h-8 bg-gray-200 rounded-full animate-pulse"></div>
      <div className="w-16 h-16 bg-green-600 rounded-full animate-pulse flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
    </div>
  );
};

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDemoModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Head>
        <title>VoiceBridge | AI-Powered Access. For All.</title>
        <meta name="description" content="Breaking language barriers in classrooms with AWS AI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className=" relative">
                  <Image
                    src="/Logo.png"
                    alt="VoiceBridge Logo"
                    height={150}
                    width={150}
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <button className="px-4 py-2 text-indigo-600 hover:text-indigo-900">Login</button>
              <button className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <div className="relative bg-indigo-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-indigo-700 mix-blend-multiply"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Breaking Language Barriers in Classrooms
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-indigo-100">
            Real-time translation, transcription, and sign language avatars powered by AWS AI.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button
              onClick={toggleDemoModal}
              className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10"
            >
              Try Demo
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
              Login
            </button>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">How It Works</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Seamless Communication for Everyone
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              VoiceBridge leverages AWS AI to provide real-time language accessibility in educational settings.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Speak</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Student or teacher talks naturally in their native language.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Capture</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Voice is processed through AWS services with industry-leading accuracy.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Translate & Transcribe</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Language converted using AWS Bedrock and other AI services.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Display</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Avatar shows signs and captions appear in user's preferred language.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-indigo-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Start breaking barriers today.</span>
            <span className="block text-indigo-200 text-xl mt-1">No signup needed for demo!</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 flex-col sm:flex-row gap-4">
            <div className="inline-flex rounded-md shadow">
              <button
                onClick={toggleDemoModal}
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Try the AI Assistant
              </button>
            </div>
            <div className="inline-flex rounded-md shadow">
              <a href="#" className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories / Testimonials */}
      <div className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Testimonials</h2>
            <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight">
              Success Stories
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              See how VoiceBridge is transforming educational experiences around the world.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="bg-white shadow overflow-hidden rounded-lg p-6">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-indigo-800 font-bold text-lg">JM</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Juan Miguel</h3>
                  <div className="flex items-center">
                    <span className="flex-shrink-0 w-6 h-4 bg-red-100 rounded overflow-hidden">
                      <div className="h-full w-full bg-gradient-to-r from-red-500 to-yellow-500"></div>
                    </span>
                    <span className="ml-1 text-sm text-gray-500">Student, Spain</span>
                  </div>
                </div>
              </div>
              <blockquote className="mt-4 text-gray-700">
                "Now I understand every lesson clearly! I used to miss so much when teachers spoke quickly, but VoiceBridge's real-time captions in Spanish help me follow along perfectly."
              </blockquote>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white shadow overflow-hidden rounded-lg p-6">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-indigo-800 font-bold text-lg">AP</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Aisha Patel</h3>
                  <div className="flex items-center">
                    <span className="flex-shrink-0 w-6 h-4 bg-red-100 rounded overflow-hidden">
                      <div className="h-full w-full bg-gradient-to-r from-orange-500 via-white to-green-500"></div>
                    </span>
                    <span className="ml-1 text-sm text-gray-500">Teacher, India</span>
                  </div>
                </div>
              </div>
              <blockquote className="mt-4 text-gray-700">
                "No more miscommunication in my diverse classroom. With VoiceBridge, my international students receive translations instantly. The sign language avatar has been revolutionary for my deaf student."
              </blockquote>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white shadow overflow-hidden rounded-lg p-6">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-indigo-800 font-bold text-lg">TN</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Thomas Nguyen</h3>
                  <div className="flex items-center">
                    <span className="flex-shrink-0 w-6 h-4 bg-red-100 rounded overflow-hidden">
                      <div className="h-full w-full bg-gradient-to-r from-red-500 to-yellow-500"></div>
                    </span>
                    <span className="ml-1 text-sm text-gray-500">School Principal, USA</span>
                  </div>
                </div>
              </div>
              <blockquote className="mt-4 text-gray-700">
                "We've seen dramatically improved participation from our ESL students since implementing VoiceBridge. The AWS-powered technology is reliable and the team's support has been exceptional."
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* Social Good Stats */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Impact</h2>
            <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight">
              Making a Difference
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10">
              <div className="text-center">
                <dt className="text-5xl font-extrabold text-indigo-600">10+</dt>
                <dd className="mt-2 text-lg font-medium text-gray-700">Languages Supported</dd>
              </div>

              <div className="text-center">
                <dt className="text-5xl font-extrabold text-indigo-600">1,200+</dt>
                <dd className="mt-2 text-lg font-medium text-gray-700">Classrooms Empowered</dd>
              </div>

              <div className="text-center">
                <dt className="text-5xl font-extrabold text-indigo-600">90%</dt>
                <dd className="mt-2 text-lg font-medium text-gray-700">Comprehension Boost</dd>
              </div>

              <div className="text-center">
                <dt className="text-5xl font-extrabold text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 inline" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </dt>
                <dd className="mt-2 text-lg font-medium text-gray-700">Backed by AWS AI Models</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center">
                <div className="h-20 w-20 relative">
                  <Image
                    src="/NoBgLogo.png"
                    alt="VoiceBridge Logo"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
              <p className="mt-2 text-base text-gray-300">
                AI-Powered Access. For All.
              </p>
              <p className="mt-4 text-sm text-gray-400">
                Built for AWS Breaking Barriers Challenge 2025
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Links</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">About</a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">Contact</a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">GitHub Repo</a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">AWS Credits</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Partners</h3>
              <div className="mt-6 grid grid-cols-2 gap-8">
                <div className="col-span-1 flex justify-center md:justify-start">
                  <div className="h-12 w-24 relative">
                    <Image
                      src="/aws-logo.png"
                      alt="AWS Partner"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>
                <div className="col-span-1 flex justify-center md:justify-start">
                  <div className="h-12 w-24 relative">
                    <Image
                      src="/open-source-logo.png"
                      alt="Open Source"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
              &copy; 2025 VoiceBridge. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Demo Modal */}
      {isModalOpen && (

<div className="fixed z-50 inset-0 overflow-y-auto"> <div className="flex items-center justify-center min-h-screen px-4 py-12 sm:p-0 text-center"> {/* Background overlay */} <div className="fixed inset-0 bg-gray-800 bg-opacity-70 transition-opacity" aria-hidden="true"></div>

  {/* Modal container */}
  <div className="relative inline-block align-middle bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full z-50">
    {/* Close button */}
    <button
      onClick={() => setIsModalOpen(false)}
      className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    {/* Modal content */}
    <div className="px-6 py-5 sm:p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        Try VoiceBridge Demo
      </h3>
      <p className="text-sm text-gray-500 mb-4">
        Experience real-time translation powered by AWS AI.
      </p>

      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="bg-indigo-100 rounded-t-lg p-3 text-center">
          <p className="font-medium text-indigo-800">Select your native language</p>
        </div>
        <div className="p-4 border border-gray-200 rounded-b-lg">
          <select className="block w-full pl-3 pr-10 py-2 mb-4 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
            <option>Mandarin</option>
            <option>Japanese</option>
            <option>Arabic</option>
            <option>Russian</option>
            <option>ASL (American Sign Language)</option>
          </select>

          <p className="text-sm text-gray-600 mb-2">Say something or click to simulate:</p>
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 py-2 px-4 rounded-md text-white font-medium text-sm">
            Simulate Translation
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
</div> )}
</div>
  )}
     