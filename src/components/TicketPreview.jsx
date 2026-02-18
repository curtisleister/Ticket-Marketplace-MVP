import { useState } from 'react';

export default function TicketPreview({ ticketData, onAddToCart, onBack }) {
  const [addHolder, setAddHolder] = useState(false);

  const ticketPrice = 42.99;
  const shippingPrice = 6.99;
  const holderPrice = 5.99;
  const total = ticketPrice + shippingPrice + (addHolder ? holderPrice : 0);

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
            Back to Upload
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

      <div className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-navy mb-2">Your Ticket Preview</h1>
        <p className="text-gray-500 mb-10">Here's how your premium physical ticket will look</p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Ticket Preview — 3 cols */}
          <div className="lg:col-span-3 flex justify-center">
            <div className="w-full max-w-lg">
              {/* Physical Ticket Design */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl" style={{ aspectRatio: '2.5 / 1' }}>
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
                          className="w-10 h-10 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-white font-bold text-xs backdrop-blur-sm"
                        >
                          {ticketData.team.split(' ').map(w => w[0]).join('')}
                        </div>
                        <div>
                          <p className="text-white/60 text-[10px] uppercase tracking-widest font-semibold">Official Souvenir Ticket</p>
                          <p className="text-white font-bold text-sm">{ticketData.type}</p>
                        </div>
                      </div>
                      <h2 className="text-white text-lg md:text-xl font-extrabold leading-tight mt-2">
                        {ticketData.team}
                      </h2>
                      <p className="text-white/70 text-sm font-medium">vs {ticketData.opponent}</p>
                    </div>
                    <div className="flex gap-6">
                      <div>
                        <p className="text-white/50 text-[10px] uppercase tracking-wider">Date</p>
                        <p className="text-white text-xs font-semibold">{ticketData.date}</p>
                      </div>
                      <div>
                        <p className="text-white/50 text-[10px] uppercase tracking-wider">Venue</p>
                        <p className="text-white text-xs font-semibold">{ticketData.venue}</p>
                      </div>
                    </div>
                  </div>

                  {/* Stub section */}
                  <div className="w-[25%] p-4 flex flex-col items-center justify-center text-center">
                    <div style={{ backgroundColor: ticketData.colors.secondary || '#D4A017' }}
                      className="w-full py-1.5 rounded mb-2">
                      <p className="text-[9px] uppercase tracking-wider font-bold" style={{ color: ticketData.colors.primary }}>
                        Admit One
                      </p>
                    </div>
                    <div className="space-y-1.5">
                      <div>
                        <p className="text-white/50 text-[9px] uppercase tracking-wider">SEC</p>
                        <p className="text-white text-lg font-extrabold">{ticketData.section}</p>
                      </div>
                      <div>
                        <p className="text-white/50 text-[9px] uppercase tracking-wider">ROW</p>
                        <p className="text-white text-lg font-extrabold">{ticketData.row}</p>
                      </div>
                      <div>
                        <p className="text-white/50 text-[9px] uppercase tracking-wider">SEAT</p>
                        <p className="text-white text-lg font-extrabold">{ticketData.seat}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gold border accents */}
                <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: ticketData.colors.secondary || '#D4A017' }} />
                <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: ticketData.colors.secondary || '#D4A017' }} />
              </div>

              {/* Watermark text below ticket */}
              <p className="text-center text-xs text-gray-400 mt-4">
                Premium cardstock &bull; Official team branding &bull; Protective packaging included
              </p>
            </div>
          </div>

          {/* Pricing Sidebar — 2 cols */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-navy mb-5">Order Summary</h3>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Souvenir Ticket</span>
                  <span className="font-semibold text-navy">${ticketPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Shipping & handling</span>
                  <span className="font-semibold text-navy">${shippingPrice.toFixed(2)}</span>
                </div>

                {/* Display holder toggle */}
                <div className="pt-3 border-t border-gray-100">
                  <label className="flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={addHolder}
                        onChange={(e) => setAddHolder(e.target.checked)}
                        className="w-4 h-4 rounded accent-gold cursor-pointer"
                      />
                      <span className="text-gray-600 text-sm group-hover:text-navy transition-colors">
                        Add display holder
                      </span>
                    </div>
                    <span className="font-semibold text-navy text-sm">+${holderPrice.toFixed(2)}</span>
                  </label>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-navy">Total</span>
                  <span className="text-2xl font-extrabold text-navy">${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={() => onAddToCart({ ...ticketData, addHolder, total })}
                className="w-full bg-gold hover:bg-gold-light text-navy-dark font-bold py-3.5 rounded-lg transition-all cursor-pointer text-base border-none shadow-sm hover:shadow"
              >
                Proceed to Order
              </button>

              <p className="text-center text-xs text-gray-400 mt-4">
                Estimated delivery: 5–7 business days
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
