import React from 'react';
import { Download } from 'lucide-react';

const DownloadPage = () => {
  const appFiles = [
    { name: 'App.jsx', path: '/src/App.jsx' },
    { name: 'index.js', path: '/src/index.js' },
    { name: 'styles.css', path: '/src/styles.css' },
  ];

  const handleDownload = (filePath) => {
    console.log(`Downloading file: ${filePath}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Download App Files</h1>
      <div className="grid gap-4">
        {appFiles.map((file) => (
          <div key={file.path} className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
            <span className="text-lg">{file.name}</span>
            <button
              onClick={() => handleDownload(file.path)}
              className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              <Download className="mr-2" size={20} />
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DownloadPage;