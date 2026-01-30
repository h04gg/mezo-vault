export interface VeBTCPosition {
    amount: bigint;
    shares: bigint;
    shareOfVault: number;
    currentBoost: number;
    lockExpiry: number;
    autoExtend: boolean;
    pendingRewards: {
      mezo: bigint;
      btc: bigint;
    };
  }
  
  export interface VeMEZOPairing {
    gauge: `0x${string}`;
    allocatedVeMEZO: bigint;
    expectedBoost: number;
    actualRewards: bigint;
    apr: number;
  }
  
  export interface VeMEZOPosition {
    amount: bigint;
    shares: bigint;
    lockExpiry: number;
    pairings: VeMEZOPairing[];
    totalAPR: number;
    pendingRewards: bigint;
  }
  
  export interface MUSDAllocation {
    savings: bigint;
    lp: bigint;
    lending: bigint;
  }
  
  export interface MUSDPosition {
    totalDeposited: bigint;
    strategy: 'CONSERVATIVE' | 'BALANCED' | 'AGGRESSIVE' | 'CUSTOM';
    allocation: MUSDAllocation;
    currentAPR: number;
    pendingRewards: {
      musd: bigint;
      mezo: bigint;
    };
  }
  
  export interface PortfolioSummary {
    totalValue: bigint;
    veBTCValue: bigint;
    veMEZOValue: bigint;
    musdValue: bigint;
    unclaimedValue: bigint;
    weeklyEarnings: bigint;
    apr: number;
  }
  
  export interface GaugeInfo {
    address: `0x${string}`;
    name: string;
    veBTCAmount: bigint;
    totalVeMEZOVoting: bigint;
    incentives: bigint;
    apr: number;
  }