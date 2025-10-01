
import React from 'react';
import { CardIcon } from './icons';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm no-print">
      <div className="container mx-auto px-4 py-4 flex items-center">
        <CardIcon className="h-8 w-8 text-indigo-600 mr-3" />
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
          Card-Maker
        </h1>
      </div>
    </header>
  );
};

export default Header;
