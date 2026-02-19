import { useState } from 'react';

function generateOrderNumber() {
  return 'SV-' + Math.random().toString(36).substring(2, 8).toUpperCase();
}

export default function OrderCheckout({ orderData, onBack }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });
  const [confirmed, setConfirmed] = useState(false);
  const [orderNumber] = useState(generateOrderNumber);

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmed(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  if (confirmed) {
    return (
      <div className="min-h-screen bg-cream">
        {/* Header */}
        <div className="bg-void">
          <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-center">
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

        <div className="max-w-2xl mx-auto px-6 py-16 text-center">
          {/* Success checkmark */}
          <div className="w-20 h-20 bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="font-display text-ink mb-3" style={{ fontSize: '40px', lineHeight: 1.1 }}>Order Confirmed!</h1>
          <p className="text-ink-dim mb-8 text-lg font-body">Your premium souvenir ticket is on its way.</p>

          <div className="bg-cream-light rounded-sm p-8 border border-cream-dark mb-8 text-left" style={{ boxShadow: 'var(--shadow-sm)' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-[10px] text-ink-dim uppercase tracking-[0.26em] font-mono font-medium mb-1">Order Number</p>
                <p className="font-mono font-semibold text-ink text-lg">{orderNumber}</p>
              </div>
              <div>
                <p className="text-[10px] text-ink-dim uppercase tracking-[0.26em] font-mono font-medium mb-1">Estimated Delivery</p>
                <p className="font-mono font-semibold text-ink text-lg">5–7 Business Days</p>
              </div>
              <div>
                <p className="text-[10px] text-ink-dim uppercase tracking-[0.26em] font-mono font-medium mb-1">Game</p>
                <p className="font-display font-bold italic text-ink">{orderData.team} vs {orderData.opponent}</p>
              </div>
              <div>
                <p className="text-[10px] text-ink-dim uppercase tracking-[0.26em] font-mono font-medium mb-1">Seat</p>
                <p className="font-mono font-semibold text-ink">Sec {orderData.section} &bull; Row {orderData.row} &bull; Seat {orderData.seat}</p>
              </div>
              <div className="sm:col-span-2">
                <p className="text-[10px] text-ink-dim uppercase tracking-[0.26em] font-mono font-medium mb-1">Total Charged</p>
                <p className="font-mono font-semibold text-ink text-2xl">${orderData.total.toFixed(2)}</p>
              </div>
            </div>
          </div>

          {/* Share CTA */}
          <div className="bg-parchment rounded-sm p-6 mb-8">
            <p className="font-display font-bold italic text-ink mb-3">Share that you ordered your Stub Vault ticket!</p>
            <div className="flex justify-center gap-3">
              <button className="bg-void text-white px-5 py-2.5 rounded-sm font-mono font-semibold text-sm hover:bg-deep transition-colors cursor-pointer border-none">
                Share on X
              </button>
              <button className="bg-cream-light text-ink px-5 py-2.5 rounded-sm font-mono font-semibold text-sm hover:bg-cream transition-colors cursor-pointer border border-cream-dark">
                Copy Link
              </button>
            </div>
          </div>

          <p className="text-ink-dim text-sm font-body">
            A confirmation email has been sent to your inbox. Questions? Contact <span className="font-mono">support@stubvault.com</span>
          </p>
        </div>
      </div>
    );
  }

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
            Back to Preview
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
        <span className="font-mono text-[10px] font-medium tracking-[0.26em] uppercase text-red">Checkout</span>
        <h1 className="font-display text-ink mb-2" style={{ fontSize: '32px', lineHeight: 1.15 }}>Checkout</h1>
        <p className="text-ink-dim mb-10 font-body">Complete your order to receive your premium souvenir ticket</p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form — 3 cols */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-cream-light rounded-sm p-6 border border-cream-dark" style={{ boxShadow: 'var(--shadow-sm)' }}>
              <h3 className="font-display font-bold italic text-ink mb-5" style={{ fontSize: '20px' }}>Shipping Information</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-mono font-medium text-ink-mid mb-1.5">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange('name')}
                    placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-sm border border-cream-dark bg-cream text-sm font-mono text-ink focus:outline-none focus:border-field focus:ring-1 focus:ring-field/20 transition-all placeholder:text-ink-dim"
                  />
                </div>

                <div>
                  <label className="block text-sm font-mono font-medium text-ink-mid mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange('email')}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-sm border border-cream-dark bg-cream text-sm font-mono text-ink focus:outline-none focus:border-field focus:ring-1 focus:ring-field/20 transition-all placeholder:text-ink-dim"
                  />
                </div>

                <div>
                  <label className="block text-sm font-mono font-medium text-ink-mid mb-1.5">Street Address</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={handleChange('address')}
                    placeholder="123 Main Street"
                    className="w-full px-4 py-3 rounded-sm border border-cream-dark bg-cream text-sm font-mono text-ink focus:outline-none focus:border-field focus:ring-1 focus:ring-field/20 transition-all placeholder:text-ink-dim"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-sm font-mono font-medium text-ink-mid mb-1.5">City</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={handleChange('city')}
                      placeholder="Austin"
                      className="w-full px-4 py-3 rounded-sm border border-cream-dark bg-cream text-sm font-mono text-ink focus:outline-none focus:border-field focus:ring-1 focus:ring-field/20 transition-all placeholder:text-ink-dim"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-mono font-medium text-ink-mid mb-1.5">State</label>
                    <input
                      type="text"
                      required
                      value={formData.state}
                      onChange={handleChange('state')}
                      placeholder="TX"
                      className="w-full px-4 py-3 rounded-sm border border-cream-dark bg-cream text-sm font-mono text-ink focus:outline-none focus:border-field focus:ring-1 focus:ring-field/20 transition-all placeholder:text-ink-dim"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-mono font-medium text-ink-mid mb-1.5">ZIP</label>
                    <input
                      type="text"
                      required
                      value={formData.zip}
                      onChange={handleChange('zip')}
                      placeholder="78701"
                      className="w-full px-4 py-3 rounded-sm border border-cream-dark bg-cream text-sm font-mono text-ink focus:outline-none focus:border-field focus:ring-1 focus:ring-field/20 transition-all placeholder:text-ink-dim"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-6 bg-red hover:bg-red-hover text-white font-mono font-semibold py-3.5 rounded-sm transition-all cursor-pointer text-base border-none"
                style={{ boxShadow: 'var(--shadow-sm)' }}
              >
                Place Order
              </button>

              <p className="text-center text-xs text-ink-dim mt-3 font-mono">
                This is a demo — no payment will be processed
              </p>
            </form>
          </div>

          {/* Order Summary Sidebar — 2 cols */}
          <div className="lg:col-span-2">
            <div className="bg-cream-light rounded-sm p-6 border border-cream-dark sticky top-6" style={{ boxShadow: 'var(--shadow-sm)' }}>
              <h3 className="font-display font-bold italic text-ink mb-5" style={{ fontSize: '20px' }}>Order Summary</h3>

              {/* Mini ticket preview */}
              <div
                className="rounded-sm overflow-hidden mb-5 p-4 text-white"
                style={{ backgroundColor: orderData.colors.primary }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-xs font-mono font-semibold">
                    {orderData.team.split(' ').map(w => w[0]).join('')}
                  </div>
                  <div>
                    <p className="font-display font-bold italic text-sm">{orderData.team}</p>
                    <p className="text-white/70 text-xs font-body">vs {orderData.opponent}</p>
                  </div>
                </div>
                <div className="mt-3 flex gap-4 text-xs text-white/60 font-mono">
                  <span>Sec {orderData.section}</span>
                  <span>Row {orderData.row}</span>
                  <span>Seat {orderData.seat}</span>
                </div>
              </div>

              <div className="space-y-3 mb-5">
                <div className="flex justify-between text-sm">
                  <span className="text-ink-mid font-mono">Souvenir Ticket</span>
                  <span className="font-mono font-semibold text-ink">$42.99</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ink-mid font-mono">Shipping</span>
                  <span className="font-mono font-semibold text-ink">$6.99</span>
                </div>
                {orderData.addHolder && (
                  <div className="flex justify-between text-sm">
                    <span className="text-ink-mid font-mono">Display Holder</span>
                    <span className="font-mono font-semibold text-ink">$5.99</span>
                  </div>
                )}
              </div>

              <div className="border-t border-cream-dark pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-display font-bold text-ink">Total</span>
                  <span className="text-2xl font-mono font-semibold text-ink">${orderData.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
