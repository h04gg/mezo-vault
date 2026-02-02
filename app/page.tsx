'use client';

import React, { useState } from 'react';
import { Info, ExternalLink, Clock, Lock, Wallet, ArrowUpCircle } from 'lucide-react';

export default function VeBTCVeMEZOVaults() {
  const [activeTab, setActiveTab] = useState('deposit');
  const [depositTab, setDepositTab] = useState<'mezo' | 'vemezo'>('mezo');
  const [nftTab, setNftTab] = useState<'available' | 'delegated'>('available');

  // MEZO deposit states
  const [depositAmount, setDepositAmount] = useState('');
  const [lockDuration, setLockDuration] = useState(4);

  // veMEZO NFT selection
  const [selectedNFTs, setSelectedNFTs] = useState<Set<string>>(new Set());

  // Withdraw NFT selection
  const [selectedWithdrawNFTs, setSelectedWithdrawNFTs] = useState<Set<string>>(new Set());

  const numericDeposit = Number(depositAmount || 0);
  const estimatedVotingPower = numericDeposit > 0 ? (numericDeposit * lockDuration) / 4 : 0;

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

  const pendingRewards = {
    total: '170.70'
  };

  const historyData = [
    { date: '2026-01-28', type: 'Delegate NFT', from: '#1234', amount: '25,000', txHash: '0x1234...5678' },
    { date: '2026-01-25', type: 'Claim Rewards', from: 'Vault', amount: '98.50', txHash: '0xabcd...efgh' },
    { date: '2026-01-20', type: 'Delegate NFT', from: '#5678', amount: '30,000', txHash: '0x9876...5432' }
  ];

  const handlePercentageClick = (percentage: number) => {
    const balance = 1000; // Mock balance
    setDepositAmount((balance * percentage / 100).toString());
  };

  const toggleNFTSelection = (nftId: string) => {
    const newSelected = new Set(selectedNFTs);
    if (newSelected.has(nftId)) {
      newSelected.delete(nftId);
    } else {
      newSelected.add(nftId);
    }
    setSelectedNFTs(newSelected);
  };

  const toggleWithdrawNFTSelection = (nftId: string) => {
    const newSelected = new Set(selectedWithdrawNFTs);
    if (newSelected.has(nftId)) {
      newSelected.delete(nftId);
    } else {
      newSelected.add(nftId);
    }
    setSelectedWithdrawNFTs(newSelected);
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
          {/* Left Column - Main Tabs */}
          <div className="lg:col-span-2">
            <div className="bg-[#1a1a1a] border border-gray-700 rounded-2xl overflow-hidden shadow-xl">
              {/* Main Tabs */}
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
                    onClick={() => setActiveTab('withdraw')}
                    className={`flex-1 px-6 py-4 font-semibold transition-all ${activeTab === 'withdraw'
                        ? 'text-white bg-purple-600/10 border-b-2 border-purple-500'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                      }`}
                  >
                    Withdraw
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
                    {/* Sub Tabs for MEZO / veMEZO */}
                    <div className="flex gap-2 bg-[#0f0f0f] border border-gray-600 rounded-lg p-1">
                      <button
                        onClick={() => setDepositTab('mezo')}
                        className={`flex-1 px-4 py-3 rounded-md text-sm font-semibold transition-all ${depositTab === 'mezo'
                            ? 'bg-purple-600 text-white shadow-lg'
                            : 'text-gray-400 hover:text-white'
                          }`}
                      >
                        <div className="flex items-center justify-center gap-2">
                          <Wallet className="w-4 h-4" />
                          <span>Deposit MEZO</span>
                        </div>
                      </button>
                      <button
                        onClick={() => setDepositTab('vemezo')}
                        className={`flex-1 px-4 py-3 rounded-md text-sm font-semibold transition-all ${depositTab === 'vemezo'
                            ? 'bg-purple-600 text-white shadow-lg'
                            : 'text-gray-400 hover:text-white'
                          }`}
                      >
                        <div className="flex items-center justify-center gap-2">
                          <Lock className="w-4 h-4" />
                          <span>Deposit veMEZO NFTs</span>
                        </div>
                      </button>
                    </div>

                    {/* MEZO Deposit Content */}
                    {depositTab === 'mezo' && (
                      <div className="space-y-6">
                        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                          <div className="flex items-start gap-3">
                            <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                            <div className="text-sm text-blue-200">
                              <span className="font-semibold text-white">Lock MEZO:</span> Create a new veMEZO NFT by locking MEZO tokens.
                              The vault will automatically vote this NFT for best rewards.
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <label className="text-sm text-gray-300 font-medium">MEZO Amount to Lock</label>
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
                          <div className="text-sm text-gray-300 font-medium mb-3">
                            You will receive veMEZO NFT
                          </div>
                          <div className="flex justify-between items-center mb-2">
                            <div className="text-sm text-gray-400">
                              {depositAmount || 0} MEZO · Unlock in {lockDuration} years
                            </div>
                            <div className="text-xl font-bold text-purple-400">
                              {estimatedVotingPower.toLocaleString()}
                            </div>
                          </div>
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
                          Lock MEZO & Create NFT
                        </button>
                      </div>
                    )}

                    {/* veMEZO NFTs Content */}
                    {depositTab === 'vemezo' && (
                      <div className="space-y-4">
                        

                        {/* NFT Status Tabs */}
                        <div className="flex gap-2">
                          <button
                            onClick={() => setNftTab('available')}
                            className={`flex-1 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${nftTab === 'available'
                                ? 'bg-purple-600 text-white shadow-md'
                                : 'bg-gray-800 text-gray-300 hover:text-white'
                              }`}
                          >
                            Available ({availableNFTs.length})
                          </button>
                          <button
                            onClick={() => setNftTab('delegated')}
                            className={`flex-1 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${nftTab === 'delegated'
                                ? 'bg-green-600 text-white shadow-md'
                                : 'bg-gray-800 text-gray-300 hover:text-white'
                              }`}
                          >
                            Deposited ({delegatedNFTs.length})
                          </button>
                        </div>

                        {/* Available NFTs */}
                        {nftTab === 'available' && (
                          <div className="space-y-3">
                            {availableNFTs.length > 0 ? (
                              <>
                                {selectedNFTs.size > 0 && (
                                  <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3">
                                    <div className="text-sm text-purple-200">
                                      <span className="font-semibold">{selectedNFTs.size} NFT{selectedNFTs.size > 1 ? 's' : ''} selected</span> -
                                      Ready to deposit to vault
                                    </div>
                                  </div>
                                )}

                                {availableNFTs.map((nft) => (
                                  <div
                                    key={nft.id}
                                    onClick={() => toggleNFTSelection(nft.id)}
                                    className={`border rounded-lg p-4 transition-all cursor-pointer ${selectedNFTs.has(nft.id)
                                        ? 'border-purple-500 bg-purple-500/10 shadow-lg shadow-purple-500/20'
                                        : 'border-gray-600 bg-[#0f0f0f] hover:border-purple-500/50'
                                      }`}
                                  >
                                    <div className="flex items-start justify-between mb-3">
                                      <div className="flex items-center gap-3">
                                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center shadow-lg ${selectedNFTs.has(nft.id)
                                            ? 'bg-purple-600'
                                            : 'bg-gradient-to-br from-purple-600 to-blue-600'
                                          }`}>
                                          <span className="font-bold">{nft.id}</span>
                                        </div>
                                        <div>
                                          <div className="font-bold text-lg text-white">{nft.amount} MEZO</div>
                                          <div className="text-xs text-gray-400">Locked for {nft.lockTime}</div>
                                        </div>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${selectedNFTs.has(nft.id)
                                            ? 'bg-purple-600 border-purple-600'
                                            : 'border-gray-600'
                                          }`}>
                                          {selectedNFTs.has(nft.id) && (
                                            <svg className="w-3 h-3 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                                              <path d="M5 13l4 4L19 7"></path>
                                            </svg>
                                          )}
                                        </div>
                                      </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-4 pt-3 border-t border-gray-700">
                                      <div>
                                        <div className="text-xs text-gray-400 mb-1">Voting Power</div>
                                        <div className="font-semibold text-purple-400">{nft.votingPower}</div>
                                      </div>
                                      <div>
                                        <div className="text-xs text-gray-400 mb-1">Remaining</div>
                                        <div className="font-semibold text-white">{nft.remainingTime}</div>
                                      </div>
                                      <div>
                                        <div className="text-xs text-gray-400 mb-1">Unlock Date</div>
                                        <div className="font-semibold text-sm text-white">{nft.unlockDate}</div>
                                      </div>
                                    </div>
                                  </div>
                                ))}

                                <button
                                  disabled={selectedNFTs.size === 0}
                                  className="w-full bg-purple-600 hover:bg-purple-500 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                  Deposit {selectedNFTs.size > 0 ? `${selectedNFTs.size} NFT${selectedNFTs.size > 1 ? 's' : ''}` : 'Selected NFTs'}
                                </button>
                              </>
                            ) : (
                              <div className="text-center py-12 text-gray-400">
                                <Lock className="w-12 h-12 mx-auto mb-3 opacity-20" />
                                <div className="text-sm">No available veMEZO NFTs</div>
                                <div className="text-xs mt-1">Lock MEZO to create NFTs first</div>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Delegated NFTs */}
                        {nftTab === 'delegated' && (
                          <div className="space-y-3">
                            {delegatedNFTs.length > 0 ? (
                              delegatedNFTs.map((nft) => (
                                <div
                                  key={nft.id}
                                  className="border border-green-500/50 bg-green-500/10 rounded-lg p-4"
                                >
                                  <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                      <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg">
                                        <span className="font-bold">{nft.id}</span>
                                      </div>
                                      <div>
                                        <div className="font-bold text-lg text-white">{nft.amount} MEZO</div>
                                        <div className="text-xs text-gray-400">Locked for {nft.lockTime}</div>
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-green-400 text-sm font-semibold">
                                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                      Active
                                    </div>
                                  </div>

                                  <div className="grid grid-cols-3 gap-4 pt-3 border-t border-gray-700">
                                    <div>
                                      <div className="text-xs text-gray-400 mb-1">Voting Power</div>
                                      <div className="font-semibold text-green-400">{nft.votingPower}</div>
                                    </div>
                                    <div>
                                      <div className="text-xs text-gray-400 mb-1">Remaining</div>
                                      <div className="font-semibold text-white">{nft.remainingTime}</div>
                                    </div>
                                    <div>
                                      <div className="text-xs text-gray-400 mb-1">Unlock Date</div>
                                      <div className="font-semibold text-sm text-white">{nft.unlockDate}</div>
                                    </div>
                                  </div>
                                </div>
                              ))
                            ) : (
                              <div className="text-center py-12 text-gray-400">
                                <Lock className="w-12 h-12 mx-auto mb-3 opacity-20" />
                                <div className="text-sm">No delegated NFTs</div>
                                <div className="text-xs mt-1">Delegate your NFTs to start earning</div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* Withdraw Tab */}
                {activeTab === 'withdraw' && (
                  <div className="space-y-6">
                    <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-3">
                      <div className="flex items-start gap-3">
                        <ArrowUpCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-orange-200">
                          <span className="font-semibold text-white">Undelegate NFTs:</span> Select delegated NFTs to withdraw from the vault.
                          You will stop earning rewards after undelegating.
                        </div>
                      </div>
                    </div>

                    {delegatedNFTs.length > 0 ? (
                      <>
                        {selectedWithdrawNFTs.size > 0 && (
                          <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-3">
                            <div className="text-sm text-orange-200">
                              <span className="font-semibold">{selectedWithdrawNFTs.size} NFT{selectedWithdrawNFTs.size > 1 ? 's' : ''} selected</span> -
                              Ready to undelegate from vault
                            </div>
                          </div>
                        )}

                        <div className="space-y-3">
                          {delegatedNFTs.map((nft) => (
                            <div
                              key={nft.id}
                              onClick={() => toggleWithdrawNFTSelection(nft.id)}
                              className={`border rounded-lg p-4 transition-all cursor-pointer ${selectedWithdrawNFTs.has(nft.id)
                                  ? 'border-orange-500 bg-orange-500/10 shadow-lg shadow-orange-500/20'
                                  : 'border-green-500/50 bg-green-500/10 hover:border-orange-500/50'
                                }`}
                            >
                              <div className="flex items-start justify-between mb-3">
                                <div className="flex items-center gap-3">
                                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center shadow-lg ${selectedWithdrawNFTs.has(nft.id)
                                      ? 'bg-orange-600'
                                      : 'bg-gradient-to-br from-green-600 to-emerald-600'
                                    }`}>
                                    <span className="font-bold">{nft.id}</span>
                                  </div>
                                  <div>
                                    <div className="font-bold text-lg text-white">{nft.amount} MEZO</div>
                                    <div className="text-xs text-gray-400">Locked for {nft.lockTime}</div>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${selectedWithdrawNFTs.has(nft.id)
                                      ? 'bg-orange-600 border-orange-600'
                                      : 'border-gray-600'
                                    }`}>
                                    {selectedWithdrawNFTs.has(nft.id) && (
                                      <svg className="w-3 h-3 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M5 13l4 4L19 7"></path>
                                      </svg>
                                    )}
                                  </div>
                                </div>
                              </div>

                              <div className="grid grid-cols-3 gap-4 pt-3 border-t border-gray-700">
                                <div>
                                  <div className="text-xs text-gray-400 mb-1">Voting Power</div>
                                  <div className="font-semibold text-purple-400">{nft.votingPower}</div>
                                </div>
                                <div>
                                  <div className="text-xs text-gray-400 mb-1">Remaining</div>
                                  <div className="font-semibold text-white">{nft.remainingTime}</div>
                                </div>
                                <div>
                                  <div className="text-xs text-gray-400 mb-1">Unlock Date</div>
                                  <div className="font-semibold text-sm text-white">{nft.unlockDate}</div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                          <div className="flex items-start gap-3">
                            <Info className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                            <div className="text-sm text-yellow-200">
                              <span className="font-semibold text-white">Warning:</span> Undelegating will stop reward accumulation.
                              Make sure to claim any pending rewards before undelegating.
                            </div>
                          </div>
                        </div>

                        <button
                          disabled={selectedWithdrawNFTs.size === 0}
                          className="w-full bg-orange-600 hover:bg-orange-500 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-orange-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Undelegate {selectedWithdrawNFTs.size > 0 ? `${selectedWithdrawNFTs.size} NFT${selectedWithdrawNFTs.size > 1 ? 's' : ''}` : 'Selected NFTs'}
                        </button>
                      </>
                    ) : (
                      <div className="text-center py-12 text-gray-400">
                        <Lock className="w-12 h-12 mx-auto mb-3 opacity-20" />
                        <div className="text-sm">No delegated NFTs to withdraw</div>
                        <div className="text-xs mt-1">Delegate NFTs first to start earning rewards</div>
                      </div>
                    )}
                  </div>
                )}

                {/* Claim Rewards Tab */}
                {activeTab === 'claim' && (
                  <div className="space-y-6">
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
                            <span className="font-semibold text-red-400">{(Number(pendingRewards.total) / 10).toFixed(2)} MEZO</span>
                          </div>
                          <div className="text-xs text-gray-400">Supports vault operations</div>
                        </div>
                      </div>
                    </div>

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
                <h3 className="font-semibold text-white">Recent Activity</h3>
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
                    <div className="text-sm">No activity yet</div>
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
              <a href="#" className="hover:text-white transition-colors">Docs</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
              <a href="#" className="hover:text-white transition-colors">Discord</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}