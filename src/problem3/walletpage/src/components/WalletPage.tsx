import React, { useMemo } from 'react';
import { WalletRow } from './WalletRow';
import { useWalletBalances, usePrices } from '../hooks';

type Currency = 'ETH' | 'OSMO' | 'NEO';

interface WalletBalance {
  currency: Currency;
  amount: number;
  blockchain: string;
}

interface Props {
  className?: string;
}

// ---- Blockchain priority mapping ----
const priorityMap: Record<string, number> = {
  Osmosis: 100,
  Ethereum: 50,
  Arbitrum: 30,
  Zilliqa: 20,
  Neo: 20,
};

const getPriority = (blockchain: string): number =>
  priorityMap[blockchain] ?? -99;

const WalletPage: React.FC<Props> = ({ className }) => {
  const balances: WalletBalance[] = useWalletBalances();
  const prices: Record<Currency, number> = usePrices();

  const sortedBalances = useMemo(() => {
    return balances
      .filter(
        (balance) =>
          getPriority(balance.blockchain) > -99 && balance.amount > 0
      )
      .sort(
        (a, b) =>
          getPriority(b.blockchain) - getPriority(a.blockchain)
      );
  }, [balances]);

  const rows = useMemo(() => {
    return sortedBalances.map((balance) => {
      const formattedAmount = balance.amount.toFixed(2);
      const usdValue =
        (prices[balance.currency] ?? 0) * balance.amount;

      return (
        <WalletRow
          key={`${balance.blockchain}-${balance.currency}`}
          amount={balance.amount}
          usdValue={usdValue}
          formattedAmount={formattedAmount}
        />
      );
    });
  }, [sortedBalances, prices]);

  return <div className={className}>{rows}</div>;
};

export default WalletPage;
export type { Currency };
