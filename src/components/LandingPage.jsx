export default function LandingPage({ onNavigate }) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-dark via-navy to-navy-light min-h-[90vh] flex items-center overflow-hidden">
        {/* Background pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(212,160,23,0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(232,244,253,0.2) 0%, transparent 40%),
              radial-gradient(circle at 60% 80%, rgba(212,160,23,0.2) 0%, transparent 40%)`
          }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
          {/* Logo / Brand */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center">
                <svg className="w-7 h-7 text-navy-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a1 1 0 001 1h1a1 1 0 001-1V7a2 2 0 00-2-2zm14 0a2 2 0 012 2v3a1 1 0 01-1 1h-1a1 1 0 01-1-1V7a2 2 0 012-2zM5 12a1 1 0 00-1 1v3a2 2 0 002 2h14a2 2 0 002-2v-3a1 1 0 00-1-1H5z" />
                </svg>
              </div>
              <h2 className="text-white text-2xl font-bold tracking-tight">STUB VAULT</h2>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Your Seat. Your Story.<br />
            <span className="text-gold">Your Stub.</span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed opacity-90">
            Turn your digital ticket into a premium physical souvenir.
            Officially licensed. Personally yours.
          </p>

          <button
            onClick={() => onNavigate('browse')}
            className="bg-gold hover:bg-gold-light text-navy-dark font-bold text-lg px-10 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
          >
            Get Your Ticket
          </button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-4">How It Works</h2>
          <p className="text-gray-500 text-center mb-14 text-lg">Four simple steps from digital memory to physical keepsake</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', icon: '📱', title: 'Upload Your Ticket', desc: 'Screenshot your digital ticket from Apple Wallet, your team app, or email confirmation.' },
              { step: '2', icon: '✓', title: 'We Verify Your Seat', desc: 'Our system cross-references your ticket details — game, date, section, row, and seat.' },
              { step: '3', icon: '🎟️', title: 'Preview Your Stub', desc: 'See a personalized preview of your premium physical ticket with official team branding.' },
              { step: '4', icon: '📦', title: 'We Ship It To You', desc: 'Your high-quality souvenir ticket arrives in a protective mailer within 5-7 business days.' },
            ].map((item) => (
              <div key={item.step} className="text-center group">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/20 transition-colors">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <div className="text-sm font-bold text-gold mb-2">STEP {item.step}</div>
                <h3 className="text-lg font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Partnerships */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-4">Featured Partnerships</h2>
          <p className="text-gray-500 text-center mb-14 text-lg">Officially licensed with leagues, teams, and universities nationwide</p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { label: 'NFL', color: '#013369' },
              { label: 'MLB', color: '#002D72' },
              { label: 'NBA', color: '#1D428A' },
              { label: 'NHL', color: '#000000' },
              { label: 'NCAA', color: '#006400' },
            ].map((league) => (
              <div
                key={league.label}
                className="bg-white rounded-xl p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-3 text-white font-bold text-sm"
                  style={{ backgroundColor: league.color }}
                >
                  {league.label}
                </div>
                <span className="text-sm font-medium text-gray-600">{league.label} Partners</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 px-6 bg-navy">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-bold text-white">
            <span className="text-gold">12,000+</span> tickets delivered to fans across <span className="text-gold">48 states</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-dark py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gold rounded flex items-center justify-center">
                  <svg className="w-5 h-5 text-navy-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a1 1 0 001 1h1a1 1 0 001-1V7a2 2 0 00-2-2zm14 0a2 2 0 012 2v3a1 1 0 01-1 1h-1a1 1 0 01-1-1V7a2 2 0 012-2zM5 12a1 1 0 00-1 1v3a2 2 0 002 2h14a2 2 0 002-2v-3a1 1 0 00-1-1H5z" />
                  </svg>
                </div>
                <span className="text-white font-bold">STUB VAULT</span>
              </div>
              <p className="text-gray-400 text-sm">Your Seat. Your Story. Your Stub.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button onClick={() => onNavigate('browse')} className="hover:text-gold transition-colors cursor-pointer bg-transparent border-none p-0 text-gray-400 text-sm">Browse Teams</button></li>
                <li><span className="hover:text-gold transition-colors cursor-pointer">How It Works</span></li>
                <li><span className="hover:text-gold transition-colors cursor-pointer">Contact Us</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><span className="cursor-pointer hover:text-gold transition-colors">Privacy Policy</span></li>
                <li><span className="cursor-pointer hover:text-gold transition-colors">Terms of Service</span></li>
                <li><span className="cursor-pointer hover:text-gold transition-colors">Licensing Info</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center">
            <p className="text-gray-500 text-xs">
              &copy; 2026 Stub Vault. All rights reserved. All team names, logos, and trademarks are property of their respective owners.
              This is an MVP demo — not a live marketplace.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
