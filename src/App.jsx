import { useState, lazy, Suspense } from 'react';
import LandingPage from './components/LandingPage';

const BrowseTeams = lazy(() => import('./components/BrowseTeams'));
const SelectGame = lazy(() => import('./components/SelectGame'));
const UploadTicket = lazy(() => import('./components/UploadTicket'));
const TicketPreview = lazy(() => import('./components/TicketPreview'));
const OrderCheckout = lazy(() => import('./components/OrderCheckout'));

function App() {
  const [screen, setScreen] = useState('landing');
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [selectedGame, setSelectedGame] = useState(null);
  const [ticketData, setTicketData] = useState(null);
  const [orderData, setOrderData] = useState(null);
  const [fadeIn, setFadeIn] = useState(true);

  const navigate = (newScreen) => {
    setFadeIn(false);
    setTimeout(() => {
      setScreen(newScreen);
      window.scrollTo({ top: 0, behavior: 'instant' });
      setFadeIn(true);
    }, 150);
  };

  const handleSelectTeam = (team) => {
    setSelectedTeam(team);
    navigate('selectGame');
  };

  const handleSelectGame = (game) => {
    setSelectedGame(game);
    navigate('upload');
  };

  const handleVerified = (data) => {
    setTicketData(data);
    navigate('preview');
  };

  const handleAddToCart = (data) => {
    setOrderData(data);
    navigate('checkout');
  };

  return (
    <div
      className={`transition-opacity duration-150 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
    >
      {screen === 'landing' && (
        <LandingPage onNavigate={(s) => navigate(s)} />
      )}
      <Suspense fallback={<div className="min-h-screen bg-cream" />}>
        {screen === 'browse' && (
          <BrowseTeams
            onSelectTeam={handleSelectTeam}
            onBack={() => navigate('landing')}
          />
        )}
        {screen === 'selectGame' && selectedTeam && (
          <SelectGame
            team={selectedTeam}
            onSelectGame={handleSelectGame}
            onBack={() => navigate('browse')}
          />
        )}
        {screen === 'upload' && selectedTeam && selectedGame && (
          <UploadTicket
            team={selectedTeam}
            game={selectedGame}
            onVerified={handleVerified}
            onBack={() => navigate('selectGame')}
          />
        )}
        {screen === 'preview' && ticketData && (
          <TicketPreview
            ticketData={ticketData}
            onAddToCart={handleAddToCart}
            onBack={() => navigate('upload')}
          />
        )}
        {screen === 'checkout' && orderData && (
          <OrderCheckout
            orderData={orderData}
            onBack={() => navigate('preview')}
          />
        )}
      </Suspense>
    </div>
  );
}

export default App;
