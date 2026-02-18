import { useState, useRef } from 'react';
import { defaultVerifiedTicket } from '../data/mockData';

export default function UploadTicket({ team, game, onVerified, onBack }) {
  const [uploadState, setUploadState] = useState('idle'); // idle | uploading | verifying | verified
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef(null);
  const dragRef = useRef(null);
  const [dragOver, setDragOver] = useState(false);

  const verifiedData = {
    ...defaultVerifiedTicket,
    team: team.name,
    opponent: game.opponent,
    date: game.date,
    venue: game.venue,
    type: game.type,
    colors: team.colors,
  };

  const handleFile = (file) => {
    if (!file) return;
    setFileName(file.name);
    setUploadState('uploading');

    // Simulate upload
    setTimeout(() => {
      setUploadState('verifying');
      // Simulate verification
      setTimeout(() => {
        setUploadState('verified');
      }, 2000);
    }, 800);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-navy">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <button
            onClick={onBack}
            className="text-white/70 hover:text-white flex items-center gap-2 transition-colors cursor-pointer bg-transparent border-none text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Games
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gold rounded flex items-center justify-center">
              <svg className="w-5 h-5 text-navy-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a1 1 0 001 1h1a1 1 0 001-1V7a2 2 0 00-2-2zm14 0a2 2 0 012 2v3a1 1 0 01-1 1h-1a1 1 0 01-1-1V7a2 2 0 012-2zM5 12a1 1 0 00-1 1v3a2 2 0 002 2h14a2 2 0 002-2v-3a1 1 0 00-1-1H5z" />
              </svg>
            </div>
            <span className="text-white font-bold text-lg">STUB VAULT</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-navy mb-2">Upload Your Digital Ticket</h1>
        <p className="text-gray-500 mb-8">
          Upload a screenshot of your digital ticket for <strong>{team.name} vs {game.opponent}</strong>
        </p>

        {/* Upload Area */}
        {uploadState === 'idle' && (
          <>
            <div
              ref={dragRef}
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all duration-200 ${
                dragOver
                  ? 'border-gold bg-gold/5'
                  : 'border-gray-300 hover:border-navy/40 hover:bg-gray-50'
              }`}
            >
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
              </div>
              <p className="text-lg font-semibold text-navy mb-2">
                Drag & drop your ticket screenshot here
              </p>
              <p className="text-gray-400 text-sm mb-4">or click to browse files</p>
              <p className="text-gray-400 text-xs">Accepts .jpg, .png, .pdf</p>
              <input
                ref={fileInputRef}
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                className="hidden"
                onChange={(e) => handleFile(e.target.files[0])}
              />
            </div>

            {/* Example Ticket */}
            <div className="mt-8 bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Example Digital Ticket</h3>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center text-white text-xs font-bold">
                    {team.name.split(' ').map(w => w[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-navy">{team.name} vs {game.opponent}</p>
                    <p className="text-xs text-gray-400">{game.date}</p>
                  </div>
                </div>
                <div className="bg-white rounded p-3 border border-gray-200 text-center">
                  <div className="w-20 h-20 mx-auto bg-gray-100 rounded flex items-center justify-center mb-2">
                    <span className="text-gray-400 text-xs">QR Code</span>
                  </div>
                  <p className="text-xs text-gray-400">SEC 124 &bull; ROW F &bull; SEAT 11</p>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Uploading / Verifying States */}
        {(uploadState === 'uploading' || uploadState === 'verifying') && (
          <div className="bg-white rounded-xl p-12 border border-gray-100 text-center">
            <div className="w-16 h-16 mx-auto mb-6 relative">
              <div className="absolute inset-0 border-4 border-gray-200 rounded-full" />
              <div className="absolute inset-0 border-4 border-gold rounded-full border-t-transparent animate-spin" />
            </div>
            <p className="text-lg font-semibold text-navy mb-2">
              {uploadState === 'uploading' ? 'Uploading...' : 'Verifying your ticket...'}
            </p>
            <p className="text-gray-400 text-sm">
              {uploadState === 'uploading'
                ? `Uploading ${fileName}`
                : 'Cross-referencing game data, date, and seat information'}
            </p>
          </div>
        )}

        {/* Verified State */}
        {uploadState === 'verified' && (
          <div className="bg-white rounded-xl p-8 border border-green-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-green-700">Ticket Verified!</h2>
            </div>

            <div className="bg-green-50/50 rounded-lg p-5 mb-6 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Game</p>
                  <p className="font-semibold text-navy">{verifiedData.team} vs {verifiedData.opponent}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Date</p>
                  <p className="font-semibold text-navy">{verifiedData.date}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Venue</p>
                  <p className="font-semibold text-navy">{verifiedData.venue}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Seat</p>
                  <p className="font-semibold text-navy">Section {verifiedData.section} &bull; Row {verifiedData.row} &bull; Seat {verifiedData.seat}</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => onVerified(verifiedData)}
              className="w-full bg-gold hover:bg-gold-light text-navy-dark font-bold py-3.5 rounded-lg transition-all cursor-pointer text-base border-none shadow-sm hover:shadow"
            >
              Preview Your Physical Ticket
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
