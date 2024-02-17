import React from 'react';
import CallToAction from '../components/CallToAction';

export default function Projects() {
  return (
    <div className='min-h-screen max-w-3xl mx-auto p-6'>
      <h1 className='text-4xl font-semibold mb-4'>Projects</h1>
      <p className='text-lg text-gray-600 mb-6'>Explore some of the projects I've worked on, built with HTML, CSS, and JavaScript.</p>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Quick Estate - A Listing Website</h2>
        <p className="text-gray-700 mb-2">A website for quickly finding a dream home and adding listings.</p>
        <iframe src="https://quick-estate2.onrender.com" className="w-full h-80" title="Quick Estate Website"></iframe>
        <a href='https://quick-estate2.onrender.com' className="block text-blue-600 hover:underline">Visit Quick Estate</a>
      </div>

      <CallToAction />
    </div>
  );
}
