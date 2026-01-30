import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { formatUnits, parseUnits } from 'viem';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatToken(value: bigint, decimals: number = 18, displayDecimals: number = 2): string {
  const formatted = formatUnits(value, decimals);
  const num = parseFloat(formatted);
  
  if (num === 0) return '0';
  if (num < 0.01) return '< 0.01';
  
  return num.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: displayDecimals,
  });
}

export function parseTokenInput(value: string, decimals: number = 18): bigint {
  try {
    return parseUnits(value, decimals);
  } catch {
    return BigInt(0);
  }
}

export function calculateBoost(
  veBTCShare: number,
  veMEZOShare: number,
  coefficient: number = 4
): number {
  if (veMEZOShare === 0) return 1;
  
  const boostTerm = coefficient * (veMEZOShare / veBTCShare);
  const multiplier = 1 + boostTerm;
  
  return Math.min(5, Math.max(1, multiplier));
}

export function getNextEpochTime(): Date {
  const now = new Date();
  const dayOfWeek = now.getUTCDay();
  const daysUntilThursday = (4 - dayOfWeek + 7) % 7;
  
  const nextEpoch = new Date(now);
  nextEpoch.setUTCDate(now.getUTCDate() + (daysUntilThursday || 7));
  nextEpoch.setUTCHours(0, 0, 0, 0);
  
  return nextEpoch;
}

export function getTimeRemaining(timestamp: number): string {
  const now = Math.floor(Date.now() / 1000);
  const remaining = timestamp - now;
  
  if (remaining <= 0) return 'Expired';
  
  const days = Math.floor(remaining / (24 * 60 * 60));
  const hours = Math.floor((remaining % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((remaining % (60 * 60)) / 60);
  
  if (days > 0) return `${days}d ${hours}h ${minutes}m`;
  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
}

export function calculateAPR(
  principal: bigint,
  earnings: bigint,
  durationDays: number
): number {
  if (principal === BigInt(0)) return 0;
  
  const earningsFloat = parseFloat(formatUnits(earnings, 18));
  const principalFloat = parseFloat(formatUnits(principal, 18));
  
  const dailyRate = earningsFloat / principalFloat / durationDays;
  const apr = dailyRate * 365 * 100;
  
  return apr;
}

export function shortenAddress(address: string, chars: number = 4): string {
  return `${address.slice(0, chars + 2)}...${address.slice(-chars)}`;
}

export function getExplorerLink(address: string, type: 'address' | 'tx' = 'address'): string {
  const baseUrl = 'https://testnet-explorer.mezo.io';
  return `${baseUrl}/${type}/${address}`;
}


export function formatNumber(num: number, decimals: number = 2): string {
  return num.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function formatUSD(num: number): string {
  return `$${formatNumber(num, 0)}`;
}

export function formatPercent(num: number): string {
  return `${num.toFixed(1)}%`;
}
