'use client';

import React from 'react';
import { FaSearch } from 'react-icons/fa';

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

export const SearchBar = ({ search, setSearch }: SearchBarProps) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search events..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 pl-10 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FaSearch className="text-gray-400" />
      </div>
    </div>
  );
};
