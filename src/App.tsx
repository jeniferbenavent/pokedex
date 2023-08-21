import '../src/styles/globals.css'
import { SearchBar } from './components/SearchBar'
import { SmallCard } from './components/SmallCard'
import { Title } from './components/Title'

export const App = () => {
  return (
    <>
      <Title />
      <SearchBar />
      <SmallCard />
    </>
  )
}

export default App
