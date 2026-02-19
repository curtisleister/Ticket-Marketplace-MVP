import { useState } from 'react';

export default function TicketPreview({ ticketData, onAddToCart, onBack }) {
  const [addHolder, setAddHolder] = useState(false);

  const ticketPrice = 42.99;
  const shippingPrice = 6.99;
  const holderPrice = 5.99;
  const total = ticketPrice + shippingPrice + (addHolder ? holderPrice : 0);

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
            Back to Upload
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red rounded-sm flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a1 1 0 001 1h1a1 1 0 001-1V7a2 2 0 00-2-2zm14 0a2 2 0 012 2v3a1 1 0 01-1 1h-1a1 1 0 01-1-1V7a2 2 0 012-2zM5 12a1 1 0 00-1 1v3a2 2 0 002 2h14a2 2 0 002-2v-3a1 1 0 00-1-1H5z" />
              </svg>
            </div>
            <span className="font-display font-bold text-lg tracking-tight">
              <span className="text-white">Stub</span>
              <span className="text-red-hover italic">Vault</span>
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <span className="font-mono text-[10px] font-medium tracking-[0.26em] uppercase text-red">Preview</span>
        <h1 className="font-display text-ink mb-2" style={{ fontSize: '32px', lineHeight: 1.15 }}>Your Ticket Preview</h1>
        <p className="text-ink-dim mb-10 font-body">Here&#39;s how your premium physical ticket will look</p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Ticket Preview — 3 cols */}
          <div className="lg:col-span-3 flex justify-center">
            <div className="w-full max-w-lg">
              {/* Physical Ticket Design */}
              <div className="relative rounded-sm overflow-hidden" style={{ aspectRatio: '2.5 / 1', boxShadow: 'var(--shadow-ticket)' }}>
                {/* Background */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${ticketData.colors.primary} 0%, ${ticketData.colors.primary}ee 40%, ${ticketData.colors.primary}cc 100%)`,
                  }}
                />

                {/* Decorative elements */}
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 21px)`,
                  }}
                />

                {/* Perforated line */}
                <div className="absolute right-[25%] top-0 bottom-0 border-r-2 border-dashed border-white/30" />

                {/* Content */}
                <div className="relative z-10 h-full flex">
                  {/* Main section */}
                  <div className="flex-1 p-5 flex flex-col justify-between pr-8">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className="w-10 h-10 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-white font-mono font-semibold text-xs backdrop-blur-sm"
                        >
                          {ticketData.team.split(' ').map(w => w[0]).join('')}
                        </div>
                        <div>
                          <p className="text-white/60 text-[10px] uppercase tracking-widest font-mono font-medium">Official Souvenir Ticket</p>
                          <p className="text-white font-mono font-semibold text-sm">{ticketData.type}</p>
                        </div>
                      </div>
                      <h2 className="text-white text-lg md:text-xl font-display font-bold italic leading-tight mt-2">
                        {ticketData.team}
                      </h2>
                      <p className="text-white/70 text-sm font-body">vs {ticketData.opponent}</p>
                    </div>
                    <div className="flex gap-6">
                      <div>
                        <p className="text-white/50 text-[10px] uppercase tracking-wider font-mono">Date</p>
                        <p className="text-white text-xs font-mono font-semibold">{ticketData.date}</p>
                      </div>
                      <div>
                        <p className="text-white/50 text-[10px] uppercase tracking-wider font-mono">Venue</p>
                        <p className="text-white text-xs font-mono font-semibold">{ticketData.venue}</p>
                      </div>
                    </div>
                  </div>

                  {/* Stub section */}
                  <div className="w-[25%] p-4 flex flex-col items-center justify-center text-center">
                    <div style={{ backgroundColor: ticketData.colors.secondary || '#C9A227' }}
                      className="w-full py-1.5 rounded-sm mb-2">
                      <p className="text-[9px] uppercase tracking-wider font-mono font-semibold" style={{ color: ticketData.colors.primary }}>
                        Admit One
                      </p>
                    </div>
                    <div className="space-y-1.5">
                      <div>
                        <p className="text-white/50 text-[9px] uppercase tracking-wider font-mono">SEC</p>
                        <p className="text-lg font-mono font-semibold" style={{ color: '#C9A227' }}>{ticketData.section}</p>
                      </div>
                      <div>
                        <p className="text-white/50 text-[9px] uppercase tracking-wider font-mono">ROW</p>
                        <p className="text-lg font-mono font-semibold" style={{ color: '#C9A227' }}>{ticketData.row}</p>
                      </div>
                      <div>
                        <p className="text-white/50 text-[9px] uppercase tracking-wider font-mono">SEAT</p>
                        <p className="text-lg font-mono font-semibold" style={{ color: '#C9A227' }}>{ticketData.seat}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Accent border stripes */}
                <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: ticketData.colors.secondary || '#C9A227' }} />
                <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: ticketData.colors.secondary || '#C9A227' }} />
              </div>

              {/* Watermark text below ticket */}
              <p className="text-center text-xs text-ink-dim mt-4 font-mono">
                Premium cardstock &bull; Official team branding &bull; Protective packaging included
              </p>
            </div>
          </div>

          {/* Pricing Sidebar — 2 cols */}
          <div className="lg:col-span-2">
            <div className="bg-cream-light rounded-sm p-6 border border-cream-dark" style={{ boxShadow: 'var(--shadow-sm)' }}>
              <h3 className="font-display font-bold italic text-ink mb-5" style={{ fontSize: '20px' }}>Order Summary</h3>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-ink-mid text-sm font-mono">Souvenir Ticket</span>
                  <span className="font-mono font-semibold text-ink">${ticketPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-ink-mid text-sm font-mono">Shipping & handling</span>
                  <span className="font-mono font-semibold text-ink">${shippingPrice.toFixed(2)}</span>
                </div>

                {/* Display holder toggle */}
                <div className="pt-3 border-t border-cream-dark">
                  <label className="flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={addHolder}
                        onChange={(e) => setAddHolder(e.target.checked)}
                        className="w-4 h-4 rounded-sm cursor-pointer accent-red"
                      />
                      <span className="text-ink-mid text-sm font-mono group-hover:text-ink transition-colors">
                        Add display holder
                      </span>
                    </div>
                    <span className="font-mono font-semibold text-ink text-sm">+${holderPrice.toFixed(2)}</span>
                  </label>
                </div>
              </div>

              <div className="border-t border-cream-dark pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-display font-bold text-ink">Total</span>
                  <span className="text-2xl font-mono font-semibold text-ink">${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={() => onAddToCart({ ...ticketData, addHolder, total })}
                className="w-full bg-red hover:bg-red-hover text-white font-mono font-semibold py-3.5 rounded-sm transition-all cursor-pointer text-base border-none"
                style={{ boxShadow: 'var(--shadow-sm)' }}
              >
                Proceed to Order
              </button>

              <p className="text-center text-xs text-ink-dim mt-4 font-mono">
                Estimated delivery: 5–7 business days
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
