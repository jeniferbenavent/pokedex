import '../styles/SearchBar.css';
import { useState } from "react";
import { SearchBarProps } from "../interfaces/Pokemon";

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchName, setSearchName] = useState('');

  const handleSearch = () => {
    onSearch(searchName);
  };

  return (
    <section className='searchBar-Container'>
      <input 
        type='text' 
        placeholder='Search your pokemon!'
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
      />
      <button onClick={handleSearch}>
        <img 
          src='/assets/img/red_pokeball.png' 
          width={45} 
          height={45}
          alt="Search"
        />
      </button>
    </section>
  );
}
