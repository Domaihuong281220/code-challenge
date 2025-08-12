import { Currency } from './components/WalletPage';

export const useWalletBalances = (): { currency: Currency; amount: number; blockchain: string }[] => {
  return [
    { currency: 'ETH', amount: 1.5, blockchain: 'Ethereum' },
    { currency: 'OSMO', amount: 2.3, blockchain: 'Osmosis' },
    { currency: 'NEO', amount: 0.8, blockchain: 'Neo' }
  ];
};

export const usePrices = (): Record<Currency, number> => ({
  ETH: 3000,
  OSMO: 1.5,
  NEO: 10
});
