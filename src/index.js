import { root, sheet, currencies } from './schema';

export const init = () => {
  return setTimer('onTimer', 0.1, 10);
}

const SYMBOLS = [ 'BTC', 'ETH', 'XRP', 'MIOTA', 'XMN', 'LTC', 'XLM', 'VTC' ];

// Called every time the timer fires
export async function onTimer() {
  const coins = await currencies.items().query('{ symbol name priceUsd marketCapUsd volumeUsd24h percentChange7d rank }');

  // Filter and coerce to string
  const rows = coins
    .filter((c) => SYMBOLS.includes(c.symbol))
    .map((c) => Object.values(c).map(String));

  // Header
  const date = new Date().toGMTString();
  await sheet.setCells({ startCell: 'A1', values: [
    ['Updated ' + date],
  ]});

  // Data
  await sheet.setCells({ startCell: 'A4', values: rows });
}

