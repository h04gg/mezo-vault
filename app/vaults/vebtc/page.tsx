'use client';

import { useState } from 'react';

import { 
  Wallet, 
  TrendingUp, 
  Zap, 
  Calendar,
  Gift,
  Info,
} from 'lucide-react';
import { veBTCData } from '@/app/lib/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/Card';
import { Button } from '@/app/components/ui/Button';
import { formatNumber, formatUSD } from '@/app/lib/utils';
import { Progress } from '@/app/components/ui/Progress';

export default function VeBTCVaultPage() {
  const [activeTab, setActiveTab] = useState<'deposit' | 'manage' | 'rewards'>('manage');
  const data = veBTCData;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900">veBTC Vault</h2>
        <p className="text-gray-500 mt-1">
          Lock BTC, boost rewards, earn yield
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Deposited"
          value={`${data.deposited} veBTC`}
          subtitle={formatUSD(data.value)}
          icon={<Wallet className="w-6 h-6 text-blue-600" />}
          iconBg="bg-blue-100"
        />

        <StatsCard
          title="Your Share"
          value={`${data.shareOfVault}%`}
          subtitle={`${formatNumber(data.shares, 0)} shares`}
          icon={<TrendingUp className="w-6 h-6 text-green-600" />}
          iconBg="bg-green-100"
        />

        <StatsCard
          title="Current Boost"
          value={`${data.currentBoost}x`}
          subtitle="Near optimal"
          icon={<Zap className="w-6 h-6 text-yellow-600" />}
          iconBg="bg-yellow-100"
          trend="↑ from 3.8x"
        />

        <StatsCard
          title="Lock Expires"
          value={data.lockExpiry}
          subtitle={data.autoExtend ? '✓ Auto-extend ON' : 'Auto-extend OFF'}
          icon={<Calendar className="w-6 h-6 text-purple-600" />}
          iconBg="bg-purple-100"
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="border-b">
              <div className="flex gap-4">
                {(['deposit', 'manage', 'rewards'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-2 px-1 font-medium capitalize transition-colors ${
                      activeTab === tab
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </CardHeader>

            <CardContent className="p-6">
              {activeTab === 'deposit' && <DepositTab />}
              {activeTab === 'manage' && <ManageTab data={data} />}
              {activeTab === 'rewards' && <RewardsTab data={data} />}
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <RewardCard data={data} />
          <BoostCard data={data} />
        </div>
      </div>
    </div>
  );
}

function StatsCard({ 
  title, 
  value, 
  subtitle, 
  icon, 
  iconBg,
  trend 
}: { 
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
  iconBg: string;
  trend?: string;
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm text-gray-500">{title}</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
            <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
            {trend && (
              <p className="text-sm text-green-600 mt-1">{trend}</p>
            )}
          </div>
          <div className={`p-3 ${iconBg} rounded-lg`}>
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function DepositTab() {
  return (
    <div className="space-y-6">
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex gap-2">
          <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-blue-800">
            <p className="font-medium mb-1">Deposit Feature</p>
            <p>This is a static demo. Deposit functionality would be available in the live version.</p>
          </div>
        </div>
      </div>

      <div className="space-y-4 opacity-50 pointer-events-none">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Amount to Deposit
          </label>
          <input
            type="number"
            placeholder="0.0"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            disabled
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Lock Duration
          </label>
          <div className="space-y-2">
            <div className="p-4 border-2 border-gray-200 rounded-lg">
              <span className="font-medium">2 Epochs (14 days) - Recommended</span>
            </div>
          </div>
        </div>

        <Button className="w-full" disabled>
          Deposit (Demo Mode)
        </Button>
      </div>
    </div>
  );
}

function ManageTab({ data }: { data: typeof veBTCData }) {
  return (
    <div className="space-y-6">
      {/* Position Info */}
      <Card className="bg-gray-50">
        <CardContent className="p-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Deposited</p>
              <p className="text-lg font-bold">{data.deposited} veBTC</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Shares</p>
              <p className="text-lg font-bold">{formatNumber(data.shares, 0)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Current Boost</p>
              <p className="text-lg font-bold text-blue-600">{data.currentBoost}x</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Lock Expires</p>
              <p className="text-lg font-bold">{data.lockExpiry}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lock Progress */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Lock Progress</span>
          <span className="text-sm text-gray-500">62.5% complete</span>
        </div>
        <Progress value={62.5} color="blue" />
      </div>

      {/* Voting Allocation */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3">Voting Allocation</h4>
        <Card>
          <CardContent className="p-4">
            <div className="space-y-3">
              {data.votingAllocation.map((vote, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium">{vote.gauge}</p>
                    <p className="text-xs text-gray-500">APR: {vote.apr}%</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{vote.allocation}%</p>
                    <p className="text-xs text-gray-500">{vote.rewards} MEZO</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Split */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3">Revenue Sharing</h4>
        <div className="space-y-2">
          <div className="h-8 bg-blue-600 rounded flex items-center justify-center text-white text-sm font-medium">
            veBTC: 60%
          </div>
          <div className="h-8 bg-green-600 rounded flex items-center justify-center text-white text-sm font-medium">
            veMEZO: 35%
          </div>
          <div className="h-8 bg-gray-600 rounded flex items-center justify-center text-white text-sm font-medium">
            Protocol: 5%
          </div>
        </div>
      </div>
    </div>
  );
}

function RewardsTab({ data }: { data: typeof veBTCData }) {
  return (
    <div className="space-y-6">
      {/* Pending Rewards */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <p className="text-sm text-blue-700 mb-1">MEZO Rewards</p>
            <p className="text-2xl font-bold text-blue-900">{data.pendingRewards.mezo}</p>
            <p className="text-sm text-blue-600">~{formatUSD(data.pendingRewards.mezo * 20)}</p>
          </CardContent>
        </Card>

        <Card className="bg-orange-50 border-orange-200">
          <CardContent className="p-4">
            <p className="text-sm text-orange-700 mb-1">BTC Rewards</p>
            <p className="text-2xl font-bold text-orange-900">{data.pendingRewards.btc}</p>
            <p className="text-sm text-orange-600">~{formatUSD(data.pendingRewards.btc * 85000)}</p>
          </CardContent>
        </Card>
      </div>

      {/* Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Rewards Breakdown (This Epoch)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Boosted Emissions</span>
              <span className="font-medium">120.00 MEZO</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Bridging Fees</span>
              <span className="font-medium">0.750 BTC</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Gauge Fees</span>
              <span className="font-medium">5.45 MEZO</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function RewardCard({ data }: { data: typeof veBTCData }) {
  const totalValue = 
    data.pendingRewards.mezo * 20 + 
    data.pendingRewards.btc * 85000;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Gift className="w-5 h-5 text-blue-600" />
          Pending Rewards
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">MEZO</p>
            <p className="text-lg font-bold text-gray-900">
              {data.pendingRewards.mezo}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">BTC</p>
            <p className="text-lg font-bold text-gray-900">
              {data.pendingRewards.btc}
            </p>
          </div>
        </div>

        <div className="pt-4 border-t">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-500">Total Value</span>
            <span className="text-xl font-bold text-gray-900">
              {formatUSD(totalValue)}
            </span>
          </div>

          <Button className="w-full">
            Claim All Rewards
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function BoostCard({ data }: { data: typeof veBTCData }) {
  const percentage = (data.currentBoost / 5) * 100;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Boost Status</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">{data.currentBoost}x</span>
            <span className="text-sm text-gray-500">Max: 5x</span>
          </div>
          <Progress value={percentage} color="green" />
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Paired veMEZO</span>
            <span className="font-medium">15,000</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Your veBTC share</span>
            <span className="font-medium">2.5%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">veMEZO share</span>
            <span className="font-medium text-green-600">3.0% ✓</span>
          </div>
        </div>

        <div className="p-3 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-700">
            💡 Currently at optimal boost level!
          </p>
        </div>
      </CardContent>
    </Card>
  );
}