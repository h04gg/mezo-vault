'use client';

import { Bell, Settings } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/Button';

export function Header() {
  const [isConnected, setIsConnected] = useState(true);
  
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Mezo Vaults</h1>
          <p className="text-sm text-gray-500">Testnet (Static Demo)</p>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>
          
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Settings className="w-5 h-5 text-gray-600" />
          </button>
          
          {isConnected ? (
            <div className="flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-sm font-medium text-green-700">
                0x742d...3f4a
              </span>
            </div>
          ) : (
            <Button onClick={() => setIsConnected(true)}>
              Connect (Demo)
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}