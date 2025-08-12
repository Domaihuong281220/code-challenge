import React from 'react';
import WalletPage from './components/WalletPage';

const App: React.FC = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>My Wallet</h1>
      <WalletPage />
    </div>
  );
};

export default App;
