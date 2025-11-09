import { useState } from 'react';
import search from '../../assets/icons/lupa.png';
import './SearchBar.css'

type SearchBarProps = {
  onSearch?: (term: string) => void;
  placeholder?: string;
  buttonLabel?: string;
};

function SearchBar({
  onSearch,
  placeholder = 'Digite sua busca...',
}: SearchBarProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(input.trim().toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <button type="submit">
        <img src={search} alt="Buscar" />
      </button>
      <input
        type="text"
        placeholder={placeholder}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}

export default SearchBar;
