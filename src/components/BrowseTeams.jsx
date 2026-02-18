import { useState } from 'react';
import { partners, leagues } from '../data/mockData';

export default function BrowseTeams({ onSelectTeam, onBack }) {
  const [activeLeague, setActiveLeague] = useState('All');

  const filtered = activeLeague === 'All'
    ? partners
    : partners.filter((p) => p.league === activeLeague);

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
            Back to Home
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

      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-navy mb-2">Browse Partners</h1>
        <p className="text-gray-500 mb-8">Select a team or university to view available games</p>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-10">
          {leagues.map((league) => (
            <button
              key={league}
              onClick={() => setActiveLeague(league)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer border-none ${
                activeLeague === league
                  ? 'bg-navy text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
              }`}
            >
              {league}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((team) => (
            <div
              key={team.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 border border-gray-100 group"
            >
              {/* Team color banner */}
              <div
                className="h-24 flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${team.colors.primary}, ${team.colors.primary}dd)` }}
              >
                <div
                  className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xs backdrop-blur-sm border border-white/30"
                >
                  {team.name.split(' ').map(w => w[0]).join('')}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: team.colors.primary + '15', color: team.colors.primary }}>
                    {team.league}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-navy mt-2">{team.name}</h3>
                <p className="text-gray-400 text-sm mb-4">
                  {team.games.length} game{team.games.length !== 1 ? 's' : ''} available
                </p>
                <button
                  onClick={() => onSelectTeam(team)}
                  className="w-full bg-navy hover:bg-navy-light text-white font-semibold py-2.5 rounded-lg transition-colors cursor-pointer text-sm border-none"
                >
                  View Available Games
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
