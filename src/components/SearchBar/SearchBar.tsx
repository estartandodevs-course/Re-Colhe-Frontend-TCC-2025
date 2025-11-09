import { useState } from 'react';
import search from '../../assets/icons/lupa.png'

type SearchBarProps = {
  onSearch?: (term: string) => void;
  className?: string;
  placeholder?: string;
  buttonLabel?: string;
};

function SearchBar({
  onSearch,
  className,
  placeholder = 'Digite sua busca...',
}: SearchBarProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(input.trim().toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <button type="submit" className="search-button">
        <img src={search} alt="Buscar" />
      </button>
      <input
        type="text"
        placeholder={placeholder}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="search-input"
      />
    </form>
  );
}

export default SearchBar;
