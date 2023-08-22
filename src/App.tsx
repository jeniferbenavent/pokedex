import { useState } from 'react'
import '../src/styles/globals.css'
import { BigCard } from './components/BigCard'
import { SearchBar } from './components/SearchBar'
import { SmallCard } from './components/SmallCard'
import { Title } from './components/Title'
import { usePokemonAPI } from './hooks/usePokemonAPI'

export const App = () => {
  const [name, setName] = useState("")
  
  const handleSearch = (nameSearched: string) => {
    setName(nameSearched)
  };
  
  usePokemonAPI(name);
  

  return (
    <>
      <Title />
      <SearchBar onSearch={handleSearch} />
      <BigCard />
      <SmallCard name={name}/>
    </>
  )
}

export default App
