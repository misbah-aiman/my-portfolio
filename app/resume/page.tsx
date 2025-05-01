'use client';

import React from 'react';

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-10">
      <h1 className="text-4xl font-bold mb-6">My Resume</h1>

      {/* Display Resume Inline */}
      <div className="w-full max-w-4xl h-[80vh] mb-6">
        <iframe
          src="/resume.pdf"
          className="w-full h-full rounded-md border-2 border-white"
          title="Resume PDF"
        ></iframe>
      </div>

      {/* Download Option */}
      <a
        href="/resume.pdf"
        download
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition"
      >
        Download Resume
      </a>
    </div>
  );
};

export default ResumePage;
