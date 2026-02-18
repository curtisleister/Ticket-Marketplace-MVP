export default function SelectGame({ team, onSelectGame, onBack }) {
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
            Back to Teams
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

      <div className="max-w-4xl mx-auto px-6 py-10">
        {/* Team Header */}
        <div className="flex items-center gap-4 mb-8">
          <div
            className="w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg"
            style={{ background: `linear-gradient(135deg, ${team.colors.primary}, ${team.colors.primary}cc)` }}
          >
            {team.name.split(' ').map(w => w[0]).join('')}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-navy">{team.name}</h1>
            <span className="text-sm font-semibold uppercase tracking-wider text-gray-400">{team.league}</span>
          </div>
        </div>

        <h2 className="text-xl font-semibold text-gray-700 mb-6">Available Games</h2>

        {/* Game List */}
        <div className="space-y-4">
          {team.games.map((game) => (
            <div
              key={game.id}
              className={`bg-white rounded-xl p-6 border transition-all duration-200 ${
                game.available
                  ? 'border-gray-100 hover:border-gold/50 hover:shadow-md'
                  : 'border-gray-100 opacity-60'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                        game.type.includes('Playoff') || game.type.includes('Championship')
                          ? 'bg-gold/15 text-gold-dark'
                          : game.type.includes('Opener') || game.type.includes('Rivalry') || game.type.includes('Homecoming') || game.type.includes('Wild Card')
                          ? 'bg-blue-50 text-blue-600'
                          : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {game.type}
                    </span>
                    {!game.available && (
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-red-50 text-red-500">
                        SOLD OUT
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-navy">
                    {team.name} vs {game.opponent}
                  </h3>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
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
                  className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all border-none whitespace-nowrap ${
                    game.available
                      ? 'bg-gold hover:bg-gold-light text-navy-dark cursor-pointer shadow-sm hover:shadow'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
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
