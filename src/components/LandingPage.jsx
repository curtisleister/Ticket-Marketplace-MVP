import Logo from './Logo';

export default function LandingPage({ onNavigate }) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{ backgroundColor: 'var(--color-void)' }}>
        {/* Background pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(184,115,16,0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(240,230,204,0.15) 0%, transparent 40%),
              radial-gradient(circle at 60% 80%, rgba(184,115,16,0.2) 0%, transparent 40%)`
          }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
          {/* Brand Wordmark */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 mb-6">
              <Logo size={48} />
              <span className="font-display text-2xl font-bold tracking-tight">
                <span className="text-white">Stub</span>
                <span className="text-red-hover italic">Vault</span>
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-display text-white mb-6" style={{ lineHeight: 0.95, letterSpacing: '-0.02em' }}>
            Your Seat. Your Story.<br />
            <span className="text-amber">Your Stub.</span>
          </h1>

          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--color-cream)', opacity: 0.85 }}>
            Turn your digital ticket into a premium physical souvenir.
            Officially licensed. Personally yours.
          </p>

          <button
            onClick={() => onNavigate('browse')}
            className="bg-red hover:bg-red-hover text-white font-mono font-semibold text-lg px-10 py-4 transition-all duration-200 cursor-pointer"
            style={{ borderRadius: '1px', boxShadow: 'var(--shadow-md)' }}
          >
            Get Your Ticket
          </button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <span className="font-mono text-[10px] font-medium tracking-[0.26em] uppercase text-red">How It Works</span>
          </div>
          <h2 className="font-display text-ink text-center mb-4">How It Works</h2>
          <p className="text-ink-dim text-center mb-14 text-lg font-body">Four simple steps from digital memory to physical keepsake</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', icon: '📱', title: 'Upload Your Ticket', desc: 'Screenshot your digital ticket from Apple Wallet, your team app, or email confirmation.' },
              { step: '2', icon: '✓', title: 'We Verify Your Seat', desc: 'Our system cross-references your ticket details — game, date, section, row, and seat.' },
              { step: '3', icon: '🎟️', title: 'Preview Your Stub', desc: 'See a personalized preview of your premium physical ticket with official team branding.' },
              { step: '4', icon: '📦', title: 'We Ship It To You', desc: 'Your high-quality souvenir ticket arrives in a protective mailer within 5-7 business days.' },
            ].map((item) => (
              <div key={item.step} className="text-center group">
                <div className="w-16 h-16 bg-parchment rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-cream-dark transition-colors">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <div className="font-mono text-[10px] font-medium tracking-[0.26em] uppercase text-red mb-2">STEP {item.step}</div>
                <h3 className="text-lg font-display font-bold italic text-ink mb-2">{item.title}</h3>
                <p className="text-ink-dim text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Partnerships */}
      <section className="py-20 px-6 bg-cream-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <span className="font-mono text-[10px] font-medium tracking-[0.26em] uppercase text-red">Partnerships</span>
          </div>
          <h2 className="font-display text-ink text-center mb-4">Featured Partnerships</h2>
          <p className="text-ink-dim text-center mb-14 text-lg font-body">Officially licensed with leagues, teams, and universities nationwide</p>

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
                className="bg-cream rounded-sm p-6 flex flex-col items-center justify-center border border-cream-dark transition-all hover:-translate-y-0.5"
                style={{ boxShadow: 'var(--shadow-sm)' }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-3 text-white font-mono font-semibold text-sm"
                  style={{ backgroundColor: league.color }}
                >
                  {league.label}
                </div>
                <span className="text-sm font-mono font-medium text-ink-mid">{league.label} Partners</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 px-6 bg-void">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-display font-bold text-white">
            <span className="font-mono text-amber">12,000+</span> tickets delivered to fans across <span className="font-mono text-amber">48 states</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deep py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Logo size={32} />
                <span className="font-display font-bold tracking-tight">
                  <span className="text-white">Stub</span>
                  <span className="text-red-hover italic">Vault</span>
                </span>
              </div>
              <p className="text-cream-dark text-sm font-body">Your Seat. Your Story. Your Stub.</p>
            </div>
            <div>
              <h4 className="text-white font-mono font-semibold text-sm mb-3">Quick Links</h4>
              <ul className="space-y-2 text-cream-dark text-sm">
                <li><button onClick={() => onNavigate('browse')} className="hover:text-amber transition-colors cursor-pointer bg-transparent border-none p-0 text-cream-dark text-sm font-mono">Browse Teams</button></li>
                <li><span className="hover:text-amber transition-colors cursor-pointer font-mono">How It Works</span></li>
                <li><span className="hover:text-amber transition-colors cursor-pointer font-mono">Contact Us</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-mono font-semibold text-sm mb-3">Legal</h4>
              <ul className="space-y-2 text-cream-dark text-sm">
                <li><span className="cursor-pointer hover:text-amber transition-colors font-mono">Privacy Policy</span></li>
                <li><span className="cursor-pointer hover:text-amber transition-colors font-mono">Terms of Service</span></li>
                <li><span className="cursor-pointer hover:text-amber transition-colors font-mono">Licensing Info</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-field pt-6 text-center">
            <p className="text-ink-dim text-xs font-mono">
              &copy; 2026 Stub Vault. All rights reserved. All team names, logos, and trademarks are property of their respective owners.
              This is an MVP demo — not a live marketplace.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
