import React from 'react';

interface WalletRowProps {
  className?: string;
  amount: number;
  usdValue: number;
  formattedAmount: string;
}

export const WalletRow: React.FC<WalletRowProps> = ({ amount, usdValue, formattedAmount }) => {
  return (
    <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid #ccc', padding: '0.5rem 0' }}>
      <span>{formattedAmount}</span>
      <span>${usdValue.toFixed(2)}</span>
    </div>
  );
};
