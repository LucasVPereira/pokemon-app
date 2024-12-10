import React, { useEffect, useRef } from 'react';

interface SearchBarProps {
  onChange: (value: string) => void; // Definindo que a função onChange recebe uma string
}

export const SearchBar: React.FC<SearchBarProps> = ({ onChange }) => {
    const inputRef = useRef<HTMLInputElement>(null);
  
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if ((e.ctrlKey || e.metaKey) && e.key === '/') {
          e.preventDefault();
          inputRef.current?.focus();
        }
      };
  
      window.addEventListener('keydown', handleKeyDown);
  
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, []);
  
    return (
      <input
        ref={inputRef}
        type="text"
        placeholder="Search Pokémon..."
        onChange={(e) => onChange(e.target.value)}
        className="p-2 rounded-md"
      />
    );
  };