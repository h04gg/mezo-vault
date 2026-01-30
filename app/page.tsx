'use client';

import React, { useState } from 'react';
import { Info, ExternalLink, ChevronDown, Clock } from 'lucide-react';

export default function VeBTCVeMEZOVaults() {
  const [activeTab, setActiveTab] = useState('deposit');
  const [depositAmount, setDepositAmount] = useState('');
  const [lockDuration, setLockDuration] = useState(4);
  const [nftTab, setNftTab] = useState<'available' | 'delegated'>('available');

  const numericDeposit = Number(depositAmount || 0);

  const estimatedVotingPower =
    numericDeposit > 0
      ? (numericDeposit * lockDuration) / 4
      : 0;
  // Mock data
  const vaultStats = {
    apy: '18.5'
  };

  const userNFTs = [
    {
      id: '#1234',
      amount: '25,000',
      unlockDate: '2027-06-15',
      votingPower: '22,500',
      status: 'available',
      lockTime: '4 years',
      remainingTime: '3.2 years'
    },
    {
      id: '#5678',
      amount: '30,000',
      unlockDate: '2026-12-20',
      votingPower: '18,750',
      status: 'delegated',
      lockTime: '2 years',
      remainingTime: '0.9 years'
    },
    {
      id: '#9012',
      amount: '15,000',
      unlockDate: '2026-08-10',
      votingPower: '9,375',
      status: 'available',
      lockTime: '1 year',
      remainingTime: '0.5 years'
    }
  ];

  const availableNFTs = userNFTs.filter(nft => nft.status === 'available');
  const delegatedNFTs = userNFTs.filter(nft => nft.status === 'delegated');

  const displayedNFTs =
    nftTab === 'available' ? availableNFTs : delegatedNFTs;


  const pendingRewards = {
    total: '170.70'
  };

  const historyData = [
    { date: '2026-01-28', type: 'Delegate NFT', from: '#1234', amount: '25,000', txHash: '0x1234...5678' },
    { date: '2026-01-25', type: 'Claim Rewards', from: 'Vault', amount: '98.50', txHash: '0xabcd...efgh' },
    { date: '2026-01-20', type: 'Delegate NFT', from: '#5678', amount: '30,000', txHash: '0x9876...5432' }
  ];

  const handlePercentageClick = (percentage : number) => {
    const balance = 1000; // Mock balance
    setDepositAmount((balance * percentage / 100).toString());
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Header */}
      <header className="border-b border-gray-700 bg-[#1a1a1a] backdrop-blur-sm sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-xl font-bold">V</span>
              </div>
              <span className="text-xl font-bold">veMEZO Vault</span>
            </div>
            <button className="bg-purple-600 hover:bg-purple-500 px-6 py-2.5 rounded-lg font-semibold transition-all shadow-lg hover:shadow-purple-500/50">
              Connect Wallet
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Tabs */}
          <div className="lg:col-span-2">
            <div className="bg-[#1a1a1a] border border-gray-700 rounded-2xl overflow-hidden shadow-xl">
              {/* Tabs */}
              <div className="border-b border-gray-700">
                <div className="flex">
                  <button
                    onClick={() => setActiveTab('deposit')}
                    className={`flex-1 px-6 py-4 font-semibold transition-all ${activeTab === 'deposit'
                      ? 'text-white bg-purple-600/10 border-b-2 border-purple-500'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                      }`}
                  >
                    Deposit
                  </button>
                  <button
                    onClick={() => setActiveTab('nft')}
                    className={`flex-1 px-6 py-4 font-semibold transition-all ${activeTab === 'nft'
                      ? 'text-white bg-purple-600/10 border-b-2 border-purple-500'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                      }`}
                  >
                    My NFTs
                  </button>
                  <button
                    onClick={() => setActiveTab('claim')}
                    className={`flex-1 px-6 py-4 font-semibold transition-all ${activeTab === 'claim'
                      ? 'text-white bg-purple-600/10 border-b-2 border-purple-500'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                      }`}
                  >
                    Claim Rewards
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {/* Deposit Tab */}
                {activeTab === 'deposit' && (
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className="text-sm text-gray-300 font-medium">MEZO Amount to Deposit</label>
                        <span className="text-xs text-gray-400">Available: - MEZO</span>
                      </div>
                      <div className="bg-[#0f0f0f] border border-gray-600 rounded-lg p-4 hover:border-purple-500/50 transition-colors">
                        <div className="flex items-center justify-between mb-4">
                          <input
                            type="text"
                            value={depositAmount}
                            onChange={(e) => setDepositAmount(e.target.value)}
                            placeholder="0"
                            className="bg-transparent text-3xl font-bold outline-none flex-1 text-white placeholder-gray-600"
                          />
                          <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg border border-gray-600">
                            <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-xs font-bold">
                              M
                            </div>
                            <span className="font-semibold">MEZO</span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-400 mb-3">~$0</div>
                        <div className="flex gap-2">
                          {[25, 50, 75, 100].map(percent => (
                            <button
                              key={percent}
                              onClick={() => handlePercentageClick(percent)}
                              className="flex-1 bg-gray-800 hover:bg-gray-700 border border-gray-600 py-2 rounded text-sm font-semibold transition-all hover:border-purple-500/50"
                            >
                              {percent}%
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm text-gray-300 font-medium mb-3 block">Lock Duration</label>
                      <div className="bg-[#0f0f0f] border border-gray-600 rounded-lg p-4 hover:border-purple-500/50 transition-colors">
                        <select
                          value={lockDuration}
                          onChange={(e) => setLockDuration(Number(e.target.value))}
                          className="w-full bg-transparent text-lg font-semibold outline-none text-white cursor-pointer"
                        >
                          <option value={1}>1 year</option>
                          <option value={2}>2 years</option>
                          <option value={3}>3 years</option>
                          <option value={4}>4 years</option>
                        </select>
                      </div>
                      <div className="text-xs text-gray-400 mt-2">
                        Longer lock = Higher voting power & rewards
                      </div>
                    </div>

                    <div className="bg-[#0f0f0f] border border-gray-600 rounded-lg p-4">
                      {/* Title */}
                      <div className="text-sm text-gray-300 font-medium mb-3">
                        veMEZO (NFT)
                      </div>

                      {/* Main info */}
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-sm text-gray-400">
                          {depositAmount || 0} MEZO · Unlock in {lockDuration} years
                        </div>
                        <div className="text-xl font-bold text-purple-400">
                          {estimatedVotingPower.toLocaleString()}
                        </div>
                      </div>

                      {/* Sub info */}
                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>Estimated Voting Power</span>
                        <span>MEZO × ({lockDuration} / 4 years)</span>
                      </div>
                    </div>
                    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                      <div className="text-sm font-semibold mb-3 text-gray-200">Estimated Earning</div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">APY</span>
                          <span className="text-green-400 font-semibold text-base">{vaultStats.apy}%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Est. Annual Reward</span>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-white">0</span>
                            <span className="text-gray-400">(~$0)</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button className="w-full bg-purple-600 hover:bg-purple-500 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-purple-500/50">
                      Connect Wallet
                    </button>
                  </div>
                )}

                {/* My NFTs Tab */}
                {activeTab === 'nft' && (
                  <div className="space-y-4">
                    {/* <div className="text-sm text-gray-300 mb-4 bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                      Select veMEZO NFTs to delegate to the vault. You retain full ownership and can undelegate anytime.
                    </div> */}

                    <div className="flex gap-2 mb-6">
                      <button
                        onClick={() => setNftTab('available')}
                        className={`flex-1 px-4 py-2 rounded-lg text-sm font-semibold transition-all
      ${nftTab === 'available'
                            ? 'bg-purple-600 text-white shadow-md'
                            : 'bg-gray-800 text-gray-300 hover:text-white'
                          }`}
                      >
                        Available ({availableNFTs.length})
                      </button>

                      <button
                        onClick={() => setNftTab('delegated')}
                        className={`flex-1 px-4 py-2 rounded-lg text-sm font-semibold transition-all
      ${nftTab === 'delegated'
                            ? 'bg-green-600 text-white shadow-md'
                            : 'bg-gray-800 text-gray-300 hover:text-white'
                          }`}
                      >
                        Delegated ({delegatedNFTs.length})
                      </button>
                    </div>

                    {displayedNFTs.map((nft, index) => (
                      <div
                        key={index}
                        className={`border rounded-lg p-4 transition-all ${nft.status === 'delegated'
                          ? 'border-green-500/50 bg-green-500/10'
                          : 'border-gray-600 bg-[#0f0f0f] hover:border-purple-500/50 cursor-pointer'
                          }`}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                              <span className="font-bold">{nft.id}</span>
                            </div>
                            <div>
                              <div className="font-bold text-lg text-white">{nft.amount} MEZO</div>
                              <div className="text-xs text-gray-400">Locked for {nft.lockTime}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            {nft.status === 'delegated' ? (
                              <div className="flex items-center gap-2 text-green-400 text-sm font-semibold">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                Delegated
                              </div>
                            ) : (
                              <button className="bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-md">
                                Delegate
                              </button>
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 pt-3 border-t border-gray-700">
                          <div>
                            <div className="text-xs text-gray-400 mb-1">Voting Power</div>
                            <div className="font-semibold text-purple-400">{nft.votingPower}</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-400 mb-1">Remaining Time</div>
                            <div className="font-semibold text-white">{nft.remainingTime}</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-400 mb-1">Unlock Date</div>
                            <div className="font-semibold text-sm text-white">{nft.unlockDate}</div>
                          </div>
                        </div>

                        {nft.status === 'delegated' && (
                          <div className="mt-3 pt-3 border-t border-gray-700">
                            <button className="text-sm text-red-400 hover:text-red-300 font-semibold transition-colors">
                              Undelegate NFT
                            </button>
                          </div>
                        )}
                      </div>
                    ))}

                    {/* <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mt-6">
                      <div className="flex items-start gap-3">
                        <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-blue-200">
                          <span className="font-semibold text-white">Non-Custodial:</span> You retain full ownership of your NFTs.
                          Delegation only grants voting power to the vault. You can undelegate at any time.
                        </div>
                      </div>
                    </div> */}
                  </div>
                )}

                {/* Claim Rewards Tab */}
                {activeTab === 'claim' && (
                  <div className="space-y-6">
                    {/* Rewards Summary */}
                    <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/50 rounded-lg p-6 shadow-xl">
                      <div className="text-sm text-gray-300 mb-4 font-medium">Total Rewards Available</div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center font-bold shadow-lg">
                          M
                        </div>
                        <div>
                          <div className="text-4xl font-bold text-white">{pendingRewards.total}</div>
                          <div className="text-sm text-gray-300">MEZO</div>
                        </div>
                      </div>



                      <button className="w-full bg-green-600 hover:bg-green-500 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-green-500/50">
                        Claim {pendingRewards.total} MEZO
                      </button>
                    </div>

                    {/* Rewards Breakdown */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-white">Rewards Breakdown</h3>
                      <div className="space-y-3">
                        <div className="bg-[#0f0f0f] border border-gray-600 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-gray-300">From Gauge Voting</span>
                            <span className="font-semibold text-white">{pendingRewards.total} MEZO</span>
                          </div>
                          <div className="text-xs text-gray-400">Last updated: 2 hours ago</div>
                        </div>

                        <div className="bg-[#0f0f0f] border border-gray-600 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-gray-300">Performance Fee (10%)</span>
                            <span className="font-semibold text-red-400">{Number(pendingRewards.total) / 10} MEZO</span>
                          </div>
                          <div className="text-xs text-gray-400">Supports vault operations</div>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                        <div className="text-xs text-gray-300 mb-2">Your APR</div>
                        <div className="text-2xl font-bold text-green-400">{vaultStats.apy}%</div>
                      </div>
                      <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                        <div className="text-xs text-gray-300 mb-2">Total Earned (All Time)</div>
                        <div className="text-2xl font-bold text-white">450.75 MEZO</div>
                      </div>
                    </div>

                    {/* Info Box */}
                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-blue-200">
                          <span className="font-semibold text-white">Next Epoch:</span> Rewards are distributed at the end of each epoch (~1 week).
                          Pending rewards will become claimable after the current epoch ends.
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - History */}
          <div className="lg:col-span-1">
            <div className="bg-[#1a1a1a] border border-gray-700 rounded-2xl overflow-hidden sticky top-24 shadow-xl">
              <div className="border-b border-gray-700 p-4">
                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 text-sm font-semibold bg-purple-600 hover:bg-purple-500 rounded-lg transition-all shadow-md">
                    History
                  </button>
                  <button className="flex-1 px-4 py-2 text-sm font-semibold text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all">
                    My History
                  </button>
                </div>
              </div>

              <div className="p-4">
                {historyData.length > 0 ? (
                  <div className="space-y-3">
                    {historyData.map((item, index) => (
                      <div key={index} className="bg-[#0f0f0f] border border-gray-600 rounded-lg p-3 hover:border-purple-500/50 transition-all">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="text-sm font-semibold text-white">{item.type}</div>
                            <div className="text-xs text-gray-400">{item.date}</div>
                          </div>
                          <div className="text-xs font-semibold text-purple-400">{item.amount}</div>
                        </div>
                        <div className="text-xs text-gray-400">
                          From: <span className="text-gray-300">{item.from}</span>
                        </div>
                        <a
                          href="#"
                          className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1 mt-2 transition-colors"
                        >
                          {item.txHash}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-400">
                    <div className="text-sm">No Data found.</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-700 mt-12 py-6 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between text-sm text-gray-400">
            <div>© 2026 veMEZO Vault. All Rights Reserved. v1.0.0</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Privacy policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
