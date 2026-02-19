import { useState } from 'react';
import { partners, leagues } from '../data/mockData';
import Logo from './Logo';

export default function BrowseTeams({ onSelectTeam, onBack }) {
  const [activeLeague, setActiveLeague] = useState('All');

  const filtered = activeLeague === 'All'
    ? partners
    : partners.filter((p) => p.league === activeLeague);

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
            Back to Home
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

      <div className="max-w-6xl mx-auto px-6 py-10">
        <span className="font-mono text-[10px] font-medium tracking-[0.26em] uppercase text-red">Teams</span>
        <h1 className="text-3xl md:text-4xl font-display text-ink mb-2" style={{ fontSize: '40px', lineHeight: 1.1 }}>Browse Partners</h1>
        <p className="text-ink-dim mb-8 font-body">Select a team or university to view available games</p>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-10">
          {leagues.map((league) => (
            <button
              key={league}
              onClick={() => setActiveLeague(league)}
              className={`px-5 py-2 rounded-sm text-sm font-mono font-semibold transition-all cursor-pointer border-none ${
                activeLeague === league
                  ? 'bg-red text-white'
                  : 'bg-cream-light text-ink-dim hover:bg-parchment'
              }`}
              style={{ boxShadow: activeLeague === league ? 'var(--shadow-sm)' : 'none' }}
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
              className="bg-cream-light rounded-sm overflow-hidden border border-cream-dark group transition-all duration-200 hover:-translate-y-1"
              style={{ boxShadow: 'var(--shadow-sm)' }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-md)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-sm)'}
            >
              {/* Team color banner */}
              <div
                className="h-24 flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${team.colors.primary}, ${team.colors.primary}dd)` }}
              >
                <div
                  className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-white font-mono font-semibold text-xs backdrop-blur-sm border border-white/30"
                >
                  {team.name.split(' ').map(w => w[0]).join('')}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded-sm"
                    style={{ backgroundColor: team.colors.primary + '15', color: team.colors.primary }}>
                    {team.league}
                  </span>
                </div>
                <h3 className="text-lg font-display font-bold italic text-ink mt-2">{team.name}</h3>
                <p className="text-ink-dim text-sm mb-4 font-mono">
                  {team.games.length} game{team.games.length !== 1 ? 's' : ''} available
                </p>
                <button
                  onClick={() => onSelectTeam(team)}
                  className="w-full bg-red hover:bg-red-hover text-white font-mono font-semibold py-2.5 rounded-sm transition-colors cursor-pointer text-sm border-none"
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
