import { useState, useRef } from 'react';
import { defaultVerifiedTicket } from '../data/mockData';
import Logo from './Logo';

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
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-void">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <button
            onClick={onBack}
            className="text-cream-dark/70 hover:text-cream flex items-center gap-2 transition-colors cursor-pointer bg-transparent border-none text-sm font-mono font-medium"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Games
          </button>
          <div className="flex items-center gap-2">
            <Logo size={32} />
            <span className="font-display font-bold text-lg tracking-tight">
              <span className="text-white">Stub</span>
              <span className="text-red-hover italic">Vault</span>
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10">
        <span className="font-mono text-[10px] font-medium tracking-[0.26em] uppercase text-red">Upload</span>
        <h1 className="font-display text-ink mb-2" style={{ fontSize: '32px', lineHeight: 1.15 }}>Upload Your Digital Ticket</h1>
        <p className="text-ink-dim mb-8 font-body">
          Upload a screenshot of your digital ticket for <strong className="text-ink">{team.name} vs {game.opponent}</strong>
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
              className={`border-2 border-dashed rounded-sm p-12 text-center cursor-pointer transition-all duration-200 ${
                dragOver
                  ? 'border-field bg-field/5'
                  : 'border-cream-dark hover:border-field hover:bg-cream-light'
              }`}
            >
              <div className="w-16 h-16 bg-parchment rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-ink-mid" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
              </div>
              <p className="text-lg font-display font-bold text-ink mb-2">
                Drag & drop your ticket screenshot here
              </p>
              <p className="text-ink-dim text-sm mb-4 font-body">or click to browse files</p>
              <p className="text-ink-dim text-xs font-mono">Accepts .jpg, .png, .pdf</p>
              <input
                ref={fileInputRef}
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                className="hidden"
                onChange={(e) => handleFile(e.target.files[0])}
              />
            </div>

            {/* Example Ticket */}
            <div className="mt-8 bg-cream-light rounded-sm p-6 border border-cream-dark">
              <h3 className="text-sm font-mono font-medium uppercase tracking-wider text-ink-dim mb-4">Example Digital Ticket</h3>
              <div className="bg-parchment rounded-sm p-4 border border-cream-dark">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-sm bg-void flex items-center justify-center text-white text-xs font-mono font-semibold">
                    {team.name.split(' ').map(w => w[0]).join('')}
                  </div>
                  <div>
                    <p className="font-display font-bold italic text-sm text-ink">{team.name} vs {game.opponent}</p>
                    <p className="text-xs text-ink-dim font-mono">{game.date}</p>
                  </div>
                </div>
                <div className="bg-cream-light rounded-sm p-3 border border-cream-dark text-center">
                  <div className="w-20 h-20 mx-auto bg-parchment rounded-sm flex items-center justify-center mb-2">
                    <span className="text-ink-dim text-xs font-mono">QR Code</span>
                  </div>
                  <p className="text-xs text-ink-dim font-mono">SEC 124 &bull; ROW F &bull; SEAT 11</p>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Uploading / Verifying States */}
        {(uploadState === 'uploading' || uploadState === 'verifying') && (
          <div className="bg-cream-light rounded-sm p-12 border border-cream-dark text-center" style={{ boxShadow: 'var(--shadow-sm)' }}>
            <div className="w-16 h-16 mx-auto mb-6 relative">
              <div className="absolute inset-0 border-4 border-cream-dark rounded-full" />
              <div className="absolute inset-0 border-4 border-red rounded-full border-t-transparent animate-spin" />
            </div>
            <p className="text-lg font-display font-bold text-ink mb-2">
              {uploadState === 'uploading' ? 'Uploading...' : 'Verifying your ticket...'}
            </p>
            <p className="text-ink-dim text-sm font-body">
              {uploadState === 'uploading'
                ? `Uploading ${fileName}`
                : 'Cross-referencing game data, date, and seat information'}
            </p>
          </div>
        )}

        {/* Verified State */}
        {uploadState === 'verified' && (
          <div className="bg-cream-light rounded-sm p-8 border border-muted" style={{ boxShadow: 'var(--shadow-sm)' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-muted/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-display font-bold text-field" style={{ fontSize: '20px' }}>Ticket Verified!</h2>
            </div>

            <div className="bg-parchment/50 rounded-sm p-5 mb-6 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <p className="text-[10px] text-ink-dim uppercase tracking-[0.26em] font-mono font-medium">Game</p>
                  <p className="font-display font-bold italic text-ink">{verifiedData.team} vs {verifiedData.opponent}</p>
                </div>
                <div>
                  <p className="text-[10px] text-ink-dim uppercase tracking-[0.26em] font-mono font-medium">Date</p>
                  <p className="font-mono font-semibold text-ink">{verifiedData.date}</p>
                </div>
                <div>
                  <p className="text-[10px] text-ink-dim uppercase tracking-[0.26em] font-mono font-medium">Venue</p>
                  <p className="font-mono font-semibold text-ink">{verifiedData.venue}</p>
                </div>
                <div>
                  <p className="text-[10px] text-ink-dim uppercase tracking-[0.26em] font-mono font-medium">Seat</p>
                  <p className="font-mono font-semibold text-ink">Section {verifiedData.section} &bull; Row {verifiedData.row} &bull; Seat {verifiedData.seat}</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => onVerified(verifiedData)}
              className="w-full bg-red hover:bg-red-hover text-white font-mono font-semibold py-3.5 rounded-sm transition-all cursor-pointer text-base border-none"
              style={{ boxShadow: 'var(--shadow-sm)' }}
            >
              Preview Your Physical Ticket
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
