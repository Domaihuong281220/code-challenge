import React from 'react';
import WalletPage from '../components/WalletPage';

export default function Home() {
    return (
        <main style={{ padding: '1rem' }}>
            <h1>Wallet Balances</h1>
            <WalletPage />
        </main>
    );
}
