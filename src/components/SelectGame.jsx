import Logo from './Logo';

export default function SelectGame({ team, onSelectGame, onBack }) {
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
            Back to Teams
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

      <div className="max-w-4xl mx-auto px-6 py-10">
        {/* Team Header */}
        <div className="flex items-center gap-4 mb-8">
          <div
            className="w-16 h-16 rounded-sm flex items-center justify-center text-white font-mono font-semibold text-sm"
            style={{ background: `linear-gradient(135deg, ${team.colors.primary}, ${team.colors.primary}cc)`, boxShadow: 'var(--shadow-md)' }}
          >
            {team.name.split(' ').map(w => w[0]).join('')}
          </div>
          <div>
            <h1 className="font-display font-bold italic text-ink" style={{ fontSize: '32px', lineHeight: 1.15 }}>{team.name}</h1>
            <span className="text-sm font-mono font-medium uppercase tracking-wider text-ink-dim">{team.league}</span>
          </div>
        </div>

        <span className="font-mono text-[10px] font-medium tracking-[0.26em] uppercase text-red">Schedule</span>
        <h2 className="font-display text-ink mb-6">Available Games</h2>

        {/* Game List */}
        <div className="space-y-4">
          {team.games.map((game) => (
            <div
              key={game.id}
              className={`bg-cream-light rounded-sm p-6 border transition-all duration-200 ${
                game.available
                  ? 'border-cream-dark hover:border-field'
                  : 'border-cream-dark opacity-60'
              }`}
              style={{ boxShadow: game.available ? 'var(--shadow-sm)' : 'none' }}
              onMouseEnter={(e) => { if (game.available) e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
              onMouseLeave={(e) => { if (game.available) e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span
                      className={`text-xs font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-sm ${
                        game.type.includes('Playoff') || game.type.includes('Championship')
                          ? 'bg-amber/15 text-amber'
                          : game.type.includes('Opener') || game.type.includes('Rivalry') || game.type.includes('Homecoming') || game.type.includes('Wild Card')
                          ? 'bg-red-pale text-red'
                          : 'bg-parchment text-ink-dim'
                      }`}
                    >
                      {game.type}
                    </span>
                    {!game.available && (
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-sm bg-red-pale text-red">
                        SOLD OUT
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-display font-bold italic text-ink">
                    {team.name} vs {game.opponent}
                  </h3>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-ink-dim font-mono">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {game.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {game.venue}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => game.available && onSelectGame(game)}
                  disabled={!game.available}
                  className={`px-6 py-3 rounded-sm font-mono font-semibold text-sm transition-all border-none whitespace-nowrap ${
                    game.available
                      ? 'bg-red hover:bg-red-hover text-white cursor-pointer'
                      : 'bg-parchment text-ink-dim cursor-not-allowed'
                  }`}
                  style={{ boxShadow: game.available ? 'var(--shadow-sm)' : 'none' }}
                >
                  {game.available ? 'Order Ticket' : 'Sold Out'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
