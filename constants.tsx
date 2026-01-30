export const MEZO_TESTNET = {
    id: 1234,
    name: 'Mezo Testnet',
    network: 'mezo-testnet',
    nativeCurrency: {
      decimals: 18,
      name: 'tBTC',
      symbol: 'tBTC',
    },
    rpcUrls: {
      default: { http: [process.env.NEXT_PUBLIC_RPC_URL || ''] },
      public: { http: [process.env.NEXT_PUBLIC_RPC_URL || ''] },
    },
    blockExplorers: {
      default: { name: 'Mezo Explorer', url: 'https://testnet-explorer.mezo.io' },
    },
    testnet: true,
  };
  
  export const CONTRACTS = {
    VEBTC_VAULT: process.env.NEXT_PUBLIC_VEBTC_VAULT as `0x${string}`,
    VEMEZO_VAULT: process.env.NEXT_PUBLIC_VEMEZO_VAULT as `0x${string}`,
    MUSD_VAULT: process.env.NEXT_PUBLIC_MUSD_VAULT as `0x${string}`,
    BOOST_CALCULATOR: process.env.NEXT_PUBLIC_BOOST_CALCULATOR as `0x${string}`,
  };
  
  export const EPOCHS = {
    DURATION: 7 * 24 * 60 * 60, // 7 days in seconds
    START_DAY: 4, // Thursday
    START_HOUR: 0, // 00:00 UTC
  };
  
  export const LOCK_DURATIONS = {
    VEBTC: {
      MIN: 1 * 24 * 60 * 60, // 1 day
      MAX: 28 * 24 * 60 * 60, // 28 days
    },
    VEMEZO: {
      MIN: 7 * 24 * 60 * 60, // 1 week
      MAX: 4 * 365 * 24 * 60 * 60, // 4 years
    },
  };
  
  export const BOOST = {
    MIN: 1,
    MAX: 5,
    COEFFICIENT: 4,
  };
  
  export const REVENUE_SPLIT = {
    VEBTC_HOLDERS: 60,
    VEMEZO_VOTERS: 35,
    PROTOCOL: 5,
  };
  
  export const STRATEGIES = {
    CONSERVATIVE: {
      name: 'Conservative',
      savings: 90,
      lp: 0,
      lending: 10,
      expectedAPR: [10, 12],
    },
    BALANCED: {
      name: 'Balanced',
      savings: 40,
      lp: 35,
      lending: 25,
      expectedAPR: [15, 18],
    },
    AGGRESSIVE: {
      name: 'Aggressive',
      savings: 10,
      lp: 70,
      lending: 20,
      expectedAPR: [22, 30],
    },
  };