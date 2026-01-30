export const dashboardData = {
    totalValue: 1250000,
    totalRewards: {
      mezo: 450,
      btc: 2.5,
      musd: 15000,
    },
    avgBoost: 4.2,
    totalAPR: 24.8,
    change30d: 12.5,
  };
  
  export const veBTCData = {
    deposited: 10,
    value: 850000,
    shares: 25000,
    shareOfVault: 2.5,
    currentBoost: 4.2,
    lockExpiry: '2d 5h 23m',
    autoExtend: true,
    pendingRewards: {
      mezo: 125.45,
      btc: 0.825,
    },
    apr: 28.5,
    votingAllocation: [
      { gauge: 'MUSD Savings', allocation: 40, apr: 32, rewards: 1.2 },
      { gauge: 'BTC-MUSD LP', allocation: 35, apr: 28, rewards: 1.5 },
      { gauge: 'Ecosystem Grant A', allocation: 15, apr: 22, rewards: 0.8 },
      { gauge: 'Validator Node 1', allocation: 10, apr: 18, rewards: 0.3 },
    ],
  };
  
  export const veMEZOData = {
    deposited: 50000,
    value: 125000,
    lockRemaining: '2y 3m',
    totalAPR: 40.3,
    pendingRewards: 85,
    pairings: [
      {
        name: 'veBTC Vault A',
        allocated: 20000,
        allocation: 40,
        boost: 4.8,
        apr: 45.2,
        earnings: 30,
        status: 'good',
      },
      {
        name: 'veBTC Vault B',
        allocated: 15000,
        allocation: 30,
        boost: 4.2,
        apr: 38.7,
        earnings: 25,
        status: 'good',
      },
      {
        name: 'veBTC Vault C',
        allocated: 15000,
        allocation: 30,
        boost: 3.7,
        apr: 32.1,
        earnings: 24,
        status: 'warning',
      },
    ],
    opportunities: [
      { name: 'veBTC Vault D', veBTC: 8, incentives: 200, apr: 48.5 },
      { name: 'veBTC Vault E', veBTC: 3, incentives: 120, apr: 42.1 },
    ],
  };
  
  export const musdData = {
    deposited: 100000,
    strategy: 'Balanced',
    currentAPR: 16.5,
    allocation: {
      savings: { amount: 40200, target: 40, apr: 12, drift: 0.2 },
      lp: { amount: 34800, target: 35, apr: 22, drift: -0.2 },
      lending: { amount: 25000, target: 25, apr: 15, drift: 0 },
    },
    pendingRewards: {
      musd: 683,
      mezo: 43,
    },
    weeklyEarnings: [
      { day: 'Mon', savings: 92, lp: 148, lending: 72, mezo: 27 },
      { day: 'Tue', savings: 93, lp: 155, lending: 71, mezo: 29 },
      { day: 'Wed', savings: 91, lp: 142, lending: 73, mezo: 25 },
      { day: 'Thu', savings: 94, lp: 160, lending: 70, mezo: 31 },
      { day: 'Fri', savings: 92, lp: 151, lending: 72, mezo: 28 },
      { day: 'Sat', savings: 93, lp: 148, lending: 74, mezo: 27 },
      { day: 'Sun', savings: 92, lp: 139, lending: 73, mezo: 24 },
    ],
  };
  
  export const portfolioData = {
    totalValue: 1250000,
    breakdown: {
      veBTC: 850000,
      veMEZO: 125000,
      musd: 250000,
      unclaimed: 25000,
    },
    performance30d: 12.5,
    weeklyEarnings: 79868,
    history: [
      { date: 'Jan 1', total: 1000000, veBTC: 680000, veMEZO: 100000, musd: 220000 },
      { date: 'Jan 8', total: 1050000, veBTC: 714000, veMEZO: 105000, musd: 231000 },
      { date: 'Jan 15', total: 1120000, veBTC: 761600, veMEZO: 112000, musd: 246400 },
      { date: 'Jan 22', total: 1180000, veBTC: 802400, veMEZO: 118000, musd: 259600 },
      { date: 'Jan 29', total: 1250000, veBTC: 850000, veMEZO: 125000, musd: 275000 },
    ],
  };